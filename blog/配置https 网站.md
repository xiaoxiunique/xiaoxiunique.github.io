1. 安装基础工具
```
yum update
yum install -y git vim
```

然后，我们来安装`letsencrypt`客户端。目前，安装`letsencrpyt`客户端最好的方式便是直接克隆代码仓库。我们登录到服务器上，将`letsencrypt`的仓库克隆到本地。

```
git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```

最后，我们安装`nginx`作为我们的`web server`。`yum install -y nginx`。安装好之后，`systemctl start nginx`启动。默认情况下，`CentOS 7`只开放了`DHCP`和`SSH`的端口，我们需要手动把端口开放一下。

```
firewall-cmd --permanent --add-service=http 
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

#### 生成证书
```
cd /opt/letsencrypt
./letsencrypt-auto certonly -a webroot --webroot-path=/usr/share/nginx/html -d www.atomblogs.com # 可以使用多个 -d 添加多个域名
```

会提示 输入邮箱

#### 配置nginx
```
user root;
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;

    keepalive_timeout  65;


    server {
        listen       80;
        server_name www.atomblogs.com;
		proxy_read_timeout 300;	
			
		location ~ ^/(atomblog)/ {
				proxy_pass http://localhost:8889;
				proxy_redirect default;
				proxy_set_header Host $host;
				proxy_set_header X-Real-IP $remote_addr;
				proxy_set_header REMOTE-HOST $remote_addr;
				proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}

		location / {
				root /root/webserver/blog; 
				proxy_set_header Host $host;
				proxy_set_header X-Real-IP $remote_addr;
				proxy_set_header REMOTE-HOST $remote_addr;
				proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		}
    }
    server {
        listen	80;
				server_name test.atomblogs.com;
				proxy_read_timeout 300;
				location / {
					proxy_pass http://localhost:8088;
				}
    	}
	
	server {
        listen	80;
				server_name web.atomblogs.com;
				proxy_read_timeout 300;
				location / {
					root /root/webserver;
				}
    	}
	server {
		listen 80;
		server_name jenkins.atomblogs.com;
		proxy_read_timeout 300;
		location / {
			proxy_pass http://localhost:8080;
		}
	}
		
	server {
		listen 80;
		server_name gitlab.atom.kim;
		proxy_read_timeout 300;
		location / {
			proxy_pass http://localhost:8881;
		}
	}


	server {
		server_name atomblogs.com;
		rewrite ^(.*) http://www.atomblogs.com$1 permanent;
	}

	server {
  		listen 443 ssl;
		server_name localhost;

  		ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  		ssl_prefer_server_ciphers on;
  		ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
  		ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
  		ssl_session_cache shared:SSL:10m;
  		ssl_session_tickets off; # Requires nginx >= 1.5.9
  		ssl_stapling on; # Requires nginx >= 1.3.7
  		ssl_stapling_verify on; # Requires nginx => 1.3.7
  		resolver 8.8.8.8 8.8.4.4 valid=300s;
  		resolver_timeout 5s;
  		add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
  		add_header X-Frame-Options DENY;
 		 add_header X-Content-Type-Options nosniff;

  		ssl_certificate /etc/letsencrypt/live/www.atomblogs.com/fullchain.pem;
  		ssl_certificate_key /etc/letsencrypt/live/www.atomblogs.com/privkey.pem;
		
		
		  location ~ ^/(atomblog)/ {
				proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
				proxy_set_header Host $http_host;
				proxy_set_header X-Forwarded-Proto https;
				proxy_redirect off;
				proxy_connect_timeout      240;
				proxy_send_timeout         240;
				proxy_read_timeout         240;
				# note, there is not SSL here! plain HTTP is used
				proxy_pass http://localhost:8889;
		}
		
		location / {
				root /root/webserver/blog; 
				proxy_set_header Host $host;
				proxy_set_header X-Real-IP $remote_addr;
				proxy_set_header REMOTE-HOST $remote_addr;
				proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

		}
	}

    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```