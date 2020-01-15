

### `0x01` 初始 `kafak`

`Kafka` 起初是 由 `LinkedIn` 公司采用 `Scala` 语言开发的一个多分区、多副本且基于 `ZooKeeper` 协调的分布式消息系统，现已被捐献给 `Apache` 基金会。目前 `Kafka` 已经定位为一个分布式流式处理平台，它以高吞吐、可持久化、可水平扩展、支持流数据处理等多种特性而被广泛使用。目前越来越多的开源分布式处理系统如 `Cloudera、Storm、Spark、Flink` 等都支持与 `Kafka` 集成。

`Kafka` 之所以受到越来越多的青睐，与它所“扮演”的三大角色是分不开的：

- 消息系统： `Kafka` 和传统的消息系统（也称作消息中间件）都具备系统解耦、冗余存储、流量削峰、缓冲、异步通信、扩展性、可恢复性等功能。与此同时，`Kafka` 还提供了大多数消息系统难以实现的消息顺序性保障及回溯消费的功能。

* 存储系统： `Kafka` 把消息持久化到磁盘，相比于其他基于内存存储的系统而言，有效地降低了数据丢失的风险。也正是得益于 Kafka 的消息持久化功能和多副本机制，我们可以把 Kafka 作为长期的数据存储系统来使用，只需要把对应的数据保留策略设置为“永久”或启用主题的日志压缩功能即可。

* 流式处理平台： `Kafka` 不仅为每个流行的流式处理框架提供了可靠的数据来源，还提供了一个完整的流式处理类库，比如窗口、连接、变换和聚合等各类操作。

### `0x02` 基本概念

一个典型的 `Kafka` 体系架构包括若干 `Producer`、若干 `Broker`、若干 `Consumer`，以及一个 `ZooKeeper` 集群，如下图所示。其中 `ZooKeeper` 是 `Kafka` 用来负责集群元数据的管理、控制器的选举等操作的。`Producer` 将消息发送到 `Broker`，`Broker` 负责将收到的消息存储到磁盘中，而 `Consumer` 负责从 `Broker` 订阅并消费消息。

![](http://images.atomblogs.com/20190814170930.png)

**核心概念**

**`Producer`**: 生产者，也就是发送消息的一方。生产者负责创建消息，然后将其投递到 Kafka 中。

**`Consumer`**： 消费者，也就是接收消息的一方。消费者连接到 `Kafka` 上并接收消息，进而进行相应的业务逻辑处理。

**`Broker`**： 服务代理节点。对于 `Kafka` 而言，`Broker` 可以简单地看作一个独立的 `Kafka` 服务节点或 `Kafka` 服务实例。大多数情况下也可以将 `Broker` 看作一台 `Kafka` 服务器，前提是这台服务器上只部署了一个 `Kafka` 实例。一个或多个 `Broker` 组成了一个 `Kafka` 集群。一般而言，我们更习惯使用首字母小写的 `broker` 来表示服务代理节点。

### `0x02` 安装配置

#### `0001` 安装`JDK`

#### `0010` 安装 `zookeeper`

下载安装包

```shell
cd /opt
wget http://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz
```

解压

```shell
tar zxvf ./zookeeper-3.4.14.tar.gz
```

加入到环境变量当中

```shell
vim /etc/profile

export ZOOKEEPER_HOME=/opt/zookeeper-3.4.12
export PATH=$PATH:$ZOOKEEPER_HOME/bin

# 使配置生效
source /etc/profile
```

修改 `zookeeper` 配置

```shell
cd conf

cp zoo_sample.cfg zoo.cfg
```

修改 `zoo.cfg` 配置

```shell
# ZooKeeper服务器心跳时间，单位为ms
tickTime=2000
# 投票选举新leader的初始化时间
initLimit=10
# leader与follower心跳检测最大容忍时间，响应超过syncLimit*tickTime，leader认为
# follower“死掉”，从服务器列表中删除follower
syncLimit=5
# 数据目录
dataDir=/tmp/zookeeper/data
# 日志目录
dataLogDir=/tmp/zookeeper/log
# ZooKeeper对外服务端口
clientPort=2181
```

创建日志和数据目录

```shell
mkdir -p /tmp/zookeeper/data
mkdir -p /tmp/zookeeper/log
```

启动 `zookeeper`服务

```shell
zkServer.sh start
```

### `0x04` 安装 `kafka`

**下载 安装包**

```shell
wget http://mirror.bit.edu.cn/apache/kafka/2.3.0/kafka_2.12-2.3.0.tgz
```

**解压并加入到环境变量中**

```shell
tar zcvf kafka_2.12-2.3.0.tgz


export KAFKA_HOME=/opt/kafka_2.12-2.3.0
export PATH=$PATH:KAFKA_HOME/bin

```

**修改 kafka 的配置文件**

```shell
# broker的编号，如果集群中有多个broker，则每个broker的编号需要设置的不同
broker.id=0
# broker对外提供的服务入口地址
listeners=PLAINTEXT://localhost:9092
# 存放消息日志文件的地址
log.dirs=/tmp/kafka-logs
# Kafka所需的ZooKeeper集群地址，为了方便演示，我们假设Kafka和ZooKeeper都安装在本机
zookeeper.connect=localhost:2181/kafka
```

**启动 kafka 服务**

```shell
bin/kafka-server-start.sh config/server.properties
```

**创建主题**

```shell
bin/kafka-topics.sh --zookeeper localhost:2181/kafka --create --topic topic-demo --replication-factor 1 --partitions 4
```

**创建消费者**

```shell
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic-demo
```

**创建生产者**

```shell
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic topic-demo
```
