(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{249:function(t,e,n){"use strict";n.r(e);var r=n(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ol",[n("li",[t._v("安装基础工具")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yum update\nyum install -y git vim\n")])])]),n("p",[t._v("然后，我们来安装"),n("code",[t._v("letsencrypt")]),t._v("客户端。目前，安装"),n("code",[t._v("letsencrpyt")]),t._v("客户端最好的方式便是直接克隆代码仓库。我们登录到服务器上，将"),n("code",[t._v("letsencrypt")]),t._v("的仓库克隆到本地。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt\n")])])]),n("p",[t._v("最后，我们安装"),n("code",[t._v("nginx")]),t._v("作为我们的"),n("code",[t._v("web server")]),t._v("。"),n("code",[t._v("yum install -y nginx")]),t._v("。安装好之后，"),n("code",[t._v("systemctl start nginx")]),t._v("启动。默认情况下，"),n("code",[t._v("CentOS 7")]),t._v("只开放了"),n("code",[t._v("DHCP")]),t._v("和"),n("code",[t._v("SSH")]),t._v("的端口，我们需要手动把端口开放一下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("firewall-cmd --permanent --add-service=http \nfirewall-cmd --permanent --add-service=https\nfirewall-cmd --reload\n")])])]),n("h4",{attrs:{id:"生成证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[t._v("#")]),t._v(" 生成证书")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd /opt/letsencrypt\n./letsencrypt-auto certonly -a webroot --webroot-path=/usr/share/nginx/html -d www.atomblogs.com # 可以使用多个 -d 添加多个域名\n")])])]),n("p",[t._v("会提示 输入邮箱")]),t._v(" "),n("h4",{attrs:{id:"配置nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[t._v("#")]),t._v(" 配置nginx")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('user root;\n#user  nobody;\nworker_processes  1;\n\n#error_log  logs/error.log;\n#error_log  logs/error.log  notice;\n#error_log  logs/error.log  info;\n\n#pid        logs/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    #log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    #                  \'$status $body_bytes_sent "$http_referer" \'\n    #                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    #access_log  logs/access.log  main;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n\n    server {\n        listen       80;\n        server_name www.atomblogs.com;\n\t\tproxy_read_timeout 300;\t\n\t\t\t\n\t\tlocation ~ ^/(atomblog)/ {\n\t\t\t\tproxy_pass http://localhost:8889;\n\t\t\t\tproxy_redirect default;\n\t\t\t\tproxy_set_header Host $host;\n\t\t\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\t\t\tproxy_set_header REMOTE-HOST $remote_addr;\n\t\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\t}\n\n\t\tlocation / {\n\t\t\t\troot /root/webserver/blog; \n\t\t\t\tproxy_set_header Host $host;\n\t\t\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\t\t\tproxy_set_header REMOTE-HOST $remote_addr;\n\t\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n\t\t}\n    }\n    server {\n        listen\t80;\n\t\t\t\tserver_name test.atomblogs.com;\n\t\t\t\tproxy_read_timeout 300;\n\t\t\t\tlocation / {\n\t\t\t\t\tproxy_pass http://localhost:8088;\n\t\t\t\t}\n    \t}\n\t\n\tserver {\n        listen\t80;\n\t\t\t\tserver_name web.atomblogs.com;\n\t\t\t\tproxy_read_timeout 300;\n\t\t\t\tlocation / {\n\t\t\t\t\troot /root/webserver;\n\t\t\t\t}\n    \t}\n\tserver {\n\t\tlisten 80;\n\t\tserver_name jenkins.atomblogs.com;\n\t\tproxy_read_timeout 300;\n\t\tlocation / {\n\t\t\tproxy_pass http://localhost:8080;\n\t\t}\n\t}\n\t\t\n\tserver {\n\t\tlisten 80;\n\t\tserver_name gitlab.atom.kim;\n\t\tproxy_read_timeout 300;\n\t\tlocation / {\n\t\t\tproxy_pass http://localhost:8881;\n\t\t}\n\t}\n\n\n\tserver {\n\t\tserver_name atomblogs.com;\n\t\trewrite ^(.*) http://www.atomblogs.com$1 permanent;\n\t}\n\n\tserver {\n  \t\tlisten 443 ssl;\n\t\tserver_name localhost;\n\n  \t\tssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n  \t\tssl_prefer_server_ciphers on;\n  \t\tssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";\n  \t\tssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0\n  \t\tssl_session_cache shared:SSL:10m;\n  \t\tssl_session_tickets off; # Requires nginx >= 1.5.9\n  \t\tssl_stapling on; # Requires nginx >= 1.3.7\n  \t\tssl_stapling_verify on; # Requires nginx => 1.3.7\n  \t\tresolver 8.8.8.8 8.8.4.4 valid=300s;\n  \t\tresolver_timeout 5s;\n  \t\tadd_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";\n  \t\tadd_header X-Frame-Options DENY;\n \t\t add_header X-Content-Type-Options nosniff;\n\n  \t\tssl_certificate /etc/letsencrypt/live/www.atomblogs.com/fullchain.pem;\n  \t\tssl_certificate_key /etc/letsencrypt/live/www.atomblogs.com/privkey.pem;\n\t\t\n\t\t\n\t\t  location ~ ^/(atomblog)/ {\n\t\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\t\t\tproxy_set_header Host $http_host;\n\t\t\t\tproxy_set_header X-Forwarded-Proto https;\n\t\t\t\tproxy_redirect off;\n\t\t\t\tproxy_connect_timeout      240;\n\t\t\t\tproxy_send_timeout         240;\n\t\t\t\tproxy_read_timeout         240;\n\t\t\t\t# note, there is not SSL here! plain HTTP is used\n\t\t\t\tproxy_pass http://localhost:8889;\n\t\t}\n\t\t\n\t\tlocation / {\n\t\t\t\troot /root/webserver/blog; \n\t\t\t\tproxy_set_header Host $host;\n\t\t\t\tproxy_set_header X-Real-IP $remote_addr;\n\t\t\t\tproxy_set_header REMOTE-HOST $remote_addr;\n\t\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n\t\t}\n\t}\n\n    # another virtual host using mix of IP-, name-, and port-based configuration\n    #\n    #server {\n    #    listen       8000;\n    #    listen       somename:8080;\n    #    server_name  somename  alias  another.alias;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n\n    # HTTPS server\n    #\n    #server {\n    #    listen       443 ssl;\n    #    server_name  localhost;\n\n    #    ssl_certificate      cert.pem;\n    #    ssl_certificate_key  cert.key;\n\n    #    ssl_session_cache    shared:SSL:1m;\n    #    ssl_session_timeout  5m;\n\n    #    ssl_ciphers  HIGH:!aNULL:!MD5;\n    #    ssl_prefer_server_ciphers  on;\n\n    #    location / {\n    #        root   html;\n    #        index  index.html index.htm;\n    #    }\n    #}\n\n}\n\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);