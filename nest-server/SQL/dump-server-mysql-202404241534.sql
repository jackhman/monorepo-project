-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: server-mysql
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article_category`
--

DROP TABLE IF EXISTS `article_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_category` (
  `id` varchar(36) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `parent_id` varchar(255) DEFAULT NULL COMMENT '父级的id，为null说明是顶级',
  `deleted_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_category`
--

LOCK TABLES `article_category` WRITE;
/*!40000 ALTER TABLE `article_category` DISABLE KEYS */;
INSERT INTO `article_category` VALUES ('29dcd2a4-8bbb-4a84-9036-ad1fd8f942be','测试22222',NULL,NULL),('41c59339-c35c-4715-a463-505946947e9f','测试777',NULL,NULL),('4b0ef7cd-b613-4f2b-9c67-2741a5856465','测试22222',NULL,NULL),('4d77b57d-e296-4923-9493-52ab89cfa9c8','测试',NULL,'2024-04-24 11:01:02.000000'),('74c6caad-a057-40be-ab5f-24e15cc2763c','测试12355',NULL,NULL),('93434cd9-1909-40de-abcf-2c64eef089f4','测试22222',NULL,NULL),('c1c910c4-7eaf-49fc-9749-67cd964ede52','测试123',NULL,NULL),('cb3370e5-51dc-4baf-8bc3-3b964222d6b9','测试22222223445',NULL,NULL),('d2342fcc-01ec-4ef6-8120-1d060fd90215','测试123','c1c910c4-7eaf-49fc-9749-67cd964ede52',NULL),('dc7bd100-c866-444f-9829-799e70e18cf1','测试22222',NULL,NULL);
/*!40000 ALTER TABLE `article_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_category_copy`
--

DROP TABLE IF EXISTS `article_category_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_category_copy` (
  `category_name` varchar(50) DEFAULT NULL,
  `parent_id` varchar(20) DEFAULT NULL COMMENT '父级的id，为null说明是顶级'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_category_copy`
--

LOCK TABLES `article_category_copy` WRITE;
/*!40000 ALTER TABLE `article_category_copy` DISABLE KEYS */;
INSERT INTO `article_category_copy` VALUES ('生活娱乐',NULL),('体育财经',NULL),('科技文艺',NULL),('影视动漫',NULL),('宠物','1453628775022080002'),('星座','1453628775022080002'),('钓鱼','1453628775022080002'),('游戏','1453628775022080002'),('穿搭','1453628775022080002'),('时尚','1453628775022080002'),('养生','1453628775022080002'),('旅游','1453628775022080002'),('体育','1453628828491067394'),('财经','1453628828491067394'),('钓鱼','1453628828491067394'),('NBA','1453628828491067394'),('股票','1453628828491067394'),('彩票','1453628828491067394'),('手机','1453628918689574914'),('摄影','1453628918689574914'),('电脑','1453628918689574914'),('动物','1453628918689574914'),('动作','1453628937568137218'),('都市','1453628937568137218'),('武侠','1453628937568137218'),('科幻','1453628937568137218'),('生活','1453628937568137218'),('动作','1453628937568137218'),('冒险','1453628937568137218'),('养成','1453628937568137218');
/*!40000 ALTER TABLE `article_category_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_comment`
--

DROP TABLE IF EXISTS `article_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_comment` (
  `id` varchar(20) NOT NULL,
  `content` text,
  `article_id` varchar(20) DEFAULT NULL COMMENT '评论的文章id',
  `from_user_id` varchar(20) DEFAULT NULL COMMENT '评论人的userId',
  `to_user_id` varchar(20) DEFAULT NULL COMMENT '评论目标用户id---回复id',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '评论的时间',
  `is_deleted` int(11) DEFAULT NULL COMMENT '是否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='文字评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_comment`
--

LOCK TABLES `article_comment` WRITE;
/*!40000 ALTER TABLE `article_comment` DISABLE KEYS */;
INSERT INTO `article_comment` VALUES ('1460911423545315329','测试评论','1455103077244387329','1',NULL,'2021-11-17 02:03:20',NULL);
/*!40000 ALTER TABLE `article_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_first_category`
--

DROP TABLE IF EXISTS `article_first_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_first_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT '' COMMENT '文章类别',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_first_category`
--

LOCK TABLES `article_first_category` WRITE;
/*!40000 ALTER TABLE `article_first_category` DISABLE KEYS */;
INSERT INTO `article_first_category` VALUES (1,'生活娱乐'),(2,'体育财经'),(3,'科技文艺'),(4,'影视动漫'),(5,'其他');
/*!40000 ALTER TABLE `article_first_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_images`
--

DROP TABLE IF EXISTS `article_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_images` (
  `id` varchar(100) NOT NULL,
  `article_id` varchar(21) NOT NULL COMMENT '文章的id',
  `image_url` json DEFAULT NULL COMMENT '图片地址',
  `is_cover` int(11) DEFAULT '0' COMMENT '是否是文章封面图 0 不是 1 是',
  `is_deleted` int(11) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='存储文章的图片';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_images`
--

LOCK TABLES `article_images` WRITE;
/*!40000 ALTER TABLE `article_images` DISABLE KEYS */;
INSERT INTO `article_images` VALUES ('1461586393275449345','1461586393220923394','[\"http://114.67.66.231:9900/pdyzt-location/backend/pdmap/application/202111193f98674e6bd848d5b8fae01797d9a50f.png\"]',1,0),('1461587682419949569','1461587682365423617','[\"http://114.67.66.231:9900/pdyzt-location/backend/pdmap/application/20211119c7931fecd156434aa9be5a439e2817e2.jpg\"]',1,0),('1462608557227261954','1462608557072072705','[\"http://114.67.66.231:9900/pdyzt-location/backend/pdmap/application/20211122ea07fc96f3b449eab117777d96042f79.png\"]',1,0),('1462670056171905026','1456820044800102402','[\"http://118.178.235.203/images/userId-1461607075485044737/userId-1461607075485044737-2022-01-20-5c0a1c7e-4d8b-4280-b0b5-7f50632bfb05-default-logo.png\", \"http://118.178.235.203/images/userId-1461607075485044737/userId-1461607075485044737-2022-01-20-6bb172d1-c9db-4cc4-8f89-66629312ed2a-empty.png\", \"https://7463-tcb-makfjc4v5sfjftsc21045-480ad3-1304745830.tcb.qcloud.la/pexels-agnese-lunecka-3671650.jpg\"]',1,0),('1483992821483061250','1483992820778418178','[\"http://118.178.235.203/images/userId-1/userId-1-2022-01-20-9fd4fd0e-e2e1-4e52-98bd-1830eb71e853-default-logo.png\"]',1,0),('1484062222932697089','1456517538039660545','[\"http://118.178.235.203/images/userId-1461607075485044737/userId-1461607075485044737-2022-01-20-4a1130e8-5036-4758-b6d0-9c907f0f590b-default-logo.png\"]',1,0),('1485552633795055617','1485552633581146114','[\"http://118.178.235.203/images/userId-1/userId-1-2022-01-24-231bf402-62a8-46be-877f-2ab7cae87732-default-avatar.png\"]',1,0),('1485553276635058177','1485553276534394881','[\"http://118.178.235.203/images/userId-1/userId-1-2022-01-24-057b1d74-c9aa-455f-ac7d-92b1273a776f-pexels-photo-10890520.jpeg\"]',1,0),('1485553750176174081','1485553750062927874','[\"http://118.178.235.203/images/userId-1/userId-1-2022-01-24-78b3c237-6a6c-4c3f-8f1d-ad98a2986e15-pexels-josé-luis-photographer-2564842.jpg\"]',1,0);
/*!40000 ALTER TABLE `article_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_list`
--

DROP TABLE IF EXISTS `article_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_list` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `category_id` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_parent_id` varchar(255) NOT NULL,
  `category_parent_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `cover_images` varchar(255) NOT NULL,
  `reject_reason` varchar(255) NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_list`
--

LOCK TABLES `article_list` WRITE;
/*!40000 ALTER TABLE `article_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_list_copy`
--

DROP TABLE IF EXISTS `article_list_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_list_copy` (
  `title` varchar(255) NOT NULL COMMENT '文章标题',
  `content` text COMMENT '文章内容',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '文章创建时间',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '文章更新时间',
  `user_id` varchar(20) DEFAULT NULL COMMENT '创建该文章的用户id',
  `category_id` varchar(20) NOT NULL DEFAULT '1' COMMENT '文章类别的id',
  `category_name` varchar(20) NOT NULL COMMENT '文章分类的名称',
  `category_parent_id` varchar(20) NOT NULL COMMENT '分类的父级id',
  `category_parent_name` varchar(20) DEFAULT NULL COMMENT '分类的父级名称',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '文章的状态\r\n/** 已删除 -1 */\r\n  /** 待审核 0 */\r\n  /** 草稿箱 1 */\r\n  /** 被驳回 2 */\r\n  /** 已发布 3 */\r\n文章的状态',
  `reject_reason` text COMMENT '文章拒绝的原因',
  `nick_name` varchar(255) NOT NULL,
  `cover_images` varchar(255) NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_list_copy`
--

LOCK TABLES `article_list_copy` WRITE;
/*!40000 ALTER TABLE `article_list_copy` DISABLE KEYS */;
INSERT INTO `article_list_copy` VALUES ('各位于晏大家好','<p>各位于晏大家好</p><p><br/><img src=\"https://tse1-mm.cn.bing.net/th/id/R-C.7ffb56c706d855c058a6c6c92f2acce5?rik=RxoQJDrpgvYRXw&amp;riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fPeople%2fmales%2f20180517%2f3c52c57b83c2c10b77311f3b873020c0.jpg&amp;ehk=yOwWxxFnzQB6jABWBJDMZthGM5WPk5fAiue3Qxuk3FU%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"430.63\" height=\"269.13\"/>&nbsp; &nbsp;&nbsp;</p><p><br/></p><hr/><p><br/></p><img src=\"https://tse4-mm.cn.bing.net/th/id/OIP-C._tsTWfGvUudQ0j_0jerorQHaHa?pid=ImgDet&amp;rs=1\" alt=\"彭于晏\" width=\"352\" height=\"352\"/><br/>','2021-11-01 17:23:03','2021-11-09 23:41:16','1','1453630075679944706','生活','1453628937568137218','影视动漫',2,'1345666','','',0),('测试文章新增','<p>测试文章新增</p><p>测试文章新增</p><p>测试文章新增</p><p>测试文章新增</p><p>测试文章新增</p>','2021-11-01 17:23:44','2021-11-01 01:23:43','1','1453630089961549826','动作','1453628937568137218','影视动漫',0,NULL,'','',0),('测试路由跳转','<p>测试路由跳转</p><p>测试路由跳转</p><p>测试路由跳转</p><p>测试路由跳转<span style=\"font-size: 16px;\">测试路由跳转</span><span style=\"font-size: 16px;\">测试路由跳转</span></p><p><span style=\"font-size: 16px;\"><br/></span></p>','2021-11-01 17:27:09','2021-11-01 01:27:08','1','1453629641007443969','体育','1453628828491067394','体育财经',0,NULL,'','',0),('再次测试','<p>再次测试</p><p>再次测试</p><p>再次测试</p><p>再次测试</p><p>再次测试</p><p>再次测试</p><p>再次测试</p>','2021-11-01 17:30:03','2021-11-01 01:30:03','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('文章创建','<p><a href=\"http://localhost:3000/article/create\">文章创建</a><br/></p>','2021-11-01 17:32:03','2021-11-01 01:32:03','1','1453629493032398850','时尚','1453628775022080002','生活娱乐',0,NULL,'','',0),('测试文章编辑','<p>1231232</p>','2021-11-02 19:44:19','2021-11-05 04:55:50','1','1453629347217420290','星座','1453628775022080002','生活娱乐',0,NULL,'','',0),('这是一个测试的文章','<p>1. 都市的繁华迷乱了我的眼睛，找不到了自己，可故乡依在。<span style=\"font-size: 16px;\"><b>纵使你在某个城市开心快乐的生活着，但在心灵深处，总有一条无形的东西牵引着你，一头在故乡那边，一头结固地栓在心底，一扯就痛。特别是久别故乡的人，也特别是夜深人静的时候，故乡这杯酒就愈香醇，故乡的影像就愈清晰，香醇的不想醒来，清晰的叫人心疼。“离恨恰如春草，更行更远还生。”就是因为这纵使走到天涯海角也解不开的乡情和乡愁，才让漂泊的我们得以慰藉，让流浪的心不再孤寂。</b></span></p><p>2. 这时的河边已是一首歌了。一担一担的苞谷插得尖尖的，搁在河滩上。一担一担的谷子垒得满满的，搁在河滩上。还有一捆一捆的黄豆、一筐一筐的小米都如画地搁在河滩上。要收工了，一天的劳累与辛苦，都得痛痛快地跳进河里，洗掉、搓掉、揩掉。健康的肌腱，壮实的胸脯，都赤裸裸的呈现在你的视野里，是一尊尊诱惑人心的雕塑。纵使原始粗犷，但极具柔和妩媚，沉醉得没有一丝邪念。上了年纪的人，都有一个上了年纪的故事，那令人艳羡的经历，像女人割禾的镰刀，深深地镂刻在心里。因此，当年轻人的玩笑随水而飘时，他们只是偶尔插上一句补补白，尽管嘴角的笑意一直未消，可心里却在思忖、盘算。<span style=\"font-size: 16px;\"><br/></span></p><p><img src=\"https://cdn.pixabay.com/photo/2021/12/02/02/59/mountains-6839521_960_720.jpg\" style=\"max-width:100%;\" contenteditable=\"false\"/></p><p>3.&nbsp;在低低的呼唤声传过之后，整个世界就覆盖在雪白的花荫下了。丽日当空，群山绵延，簇簇的白色花朵象一条流动的江河。仿佛世间所有的生命都应约前来，在这刹那里，在透明如醇蜜的阳光下，同时欢呼，同时飞旋，同时幻化成无数游离浮动的光点。这样的一个开满了白花的下午，总觉得似曾相识，总觉得是一场可以放进任何一种时空里的聚合。——席慕容《桐花》</p><p>4.&nbsp;青春有时候极为短暂，有时候却极为冗长。我很知道，因为，我也曾如你一般的年轻过。在教室的窗前，我也曾和你一样，凝视着四季都没有什么变化的校园，心里猜测着自己将来的多变化的命运。我也曾和你一样，以为，无论任何一种，都会比枯坐在教室里的命运要美丽多了。</p><p>5. 人站得高些，不但能有幸早些领略到希望的曙光，还能有幸发现生命的立体的诗篇，每一个人的人生，都是这诗篇中的一个词、一个句子或者一个标点。你可能没有成为一个美丽的词、一个引人注目的句子，一个惊叹号，但你依然是这生命的立体诗篇中的一个音节、一个停顿，一个必不可少的组成部分。这足以使你放弃前嫌，萌发为人类孕育新的歌声的兴致，为世界带来更多的诗意。——《站在历史枝头微笑》</p><br/>','2021-11-05 15:03:37','2022-01-20 07:56:13','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('测试新的文章创建','<p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建</p><p>测试新的文章创建<span style=\"font-size: 16px;\">测试新的文章创建</span><span style=\"font-size: 16px;\">测试新的文章创建</span><span style=\"font-size: 16px;\">测试新的文章创建</span></p><p>测试新的文章创建</p>','2021-11-05 18:04:47','2021-11-05 02:04:47','1','1453641304142168066','养成','1453628937568137218','影视动漫',0,NULL,'','',0),('测试文章编辑12','测试文章编辑','2021-11-06 10:57:19','2021-11-05 18:57:39','1437752089160785927','1453641304142168066','养成','1453628937568137218','影视动漫',0,NULL,'','',0),('1234678234141','<p>1234678234141<span style=\"font-size: 16px;\">1234678234141</span><span style=\"font-size: 16px;\">1234678234141</span><span style=\"font-size: 16px;\">1234678234141</span><span style=\"font-size: 16px;\">1234678234141</span></p>','2021-11-06 11:05:40','2022-01-20 07:54:17','1','1453629454214115329','游戏','1453628775022080002','生活娱乐',0,NULL,'','',0),('文章创建文章创建文章创建','<p><a href=\"http://localhost:3000/article/create\">文章创建</a><a href=\"http://localhost:3000/article/create\" style=\"font-size: 14px;\">文章创建</a><a href=\"http://localhost:3000/article/create\" style=\"font-size: 14px;\">文章创建</a><br/></p>','2021-11-06 11:08:37','2021-11-05 19:09:08','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('测试文字审核','<p>测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核<br/></p><p><br/></p><p><br/></p><p><br/></p><p>测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核<br/></p><p><br/></p><p><br/></p><p><br/></p><p>测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核测试文字审核<br/></p>','2021-11-09 11:02:16','2021-11-08 19:02:15','1','1453630034525433857','武侠','1453628937568137218','影视动漫',0,NULL,'','',0),('这是测试宠物的数据','<p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据<span style=\"font-size: 16px;\">这是测试宠物的数据</span></p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据<span style=\"font-size: 16px;\">这是测试宠物的数据</span></p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据<span style=\"font-size: 16px;\">这是测试宠物的数据</span></p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据<span style=\"font-size: 16px;\">这是测试宠物的数据</span></p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据<span style=\"font-size: 16px;\">这是测试宠物的数据</span></p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据</p>','2021-11-12 15:19:46','2021-11-11 23:19:46','1','1453629296449564673','宠物','1453628775022080002','生活娱乐',0,NULL,'','',0),('12345','<p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据</p>','2021-11-12 15:20:03','2021-11-11 23:20:02','1','1453629296449564673','宠物','1453628775022080002','生活娱乐',0,NULL,'','',0),('2135566','<p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据</p><p>这是测试宠物的数据这是测试宠物的数据这是测试宠物的数据</p>','2021-11-12 15:20:11','2021-11-11 23:20:11','1','1453629296449564673','宠物','1453628775022080002','生活娱乐',0,NULL,'','',0),('测试','<p>测试</p>','2021-11-19 10:11:11','2021-11-18 18:11:11','1','1453629892934119426','电脑','1453628918689574914','科技文艺',0,NULL,'','',0),('123','<p>123123</p>','2021-11-19 14:21:42','2021-11-18 22:44:09','1','1453629347217420290','星座','1453628775022080002','生活娱乐',0,NULL,'','',0),('文章创建','<p><a href=\"http://localhost:3000/article/create\">文章创建</a><br/></p>','2021-11-19 14:45:26','2021-11-18 22:45:25','1','1453630089961549826','动作','1453628937568137218','影视动漫',0,NULL,'','',0),('章创建','<p><a href=\"http://localhost:3000/article/create\">章创建</a><br/></p>','2021-11-19 14:47:08','2021-11-18 22:47:08','1','1453629469640765442','穿搭','1453628775022080002','生活娱乐',0,NULL,'','',0),('章创建章创建','<p><a href=\"http://localhost:3000/article/create\">章创建</a><a href=\"http://localhost:3000/article/create\" style=\"font-size: 14px;\">章创建</a><br/></p>','2021-11-19 14:50:33','2021-11-18 22:50:53','1','1453629469640765442','穿搭','1453628775022080002','生活娱乐',0,NULL,'','',0),('http://localhost:3000/article/create','<p>http://localhost:3000/article/create</p>','2021-11-22 10:27:09','2021-11-21 18:27:16','1','1453629454214115329','游戏','1453628775022080002','生活娱乐',0,NULL,'','',0),('文章上传图片测试','<p>文章上传图片测试<span style=\"font-size: 16px;\">文章上传图片测试</span><span style=\"font-size: 16px;\">文章上传图片测试</span><span style=\"font-size: 16px;\">文章上传图片测试</span><span style=\"font-size: 16px;\">文章上传图片测试</span><span style=\"font-size: 16px;\">文章上传图片测试</span><br/><br/></p>','2022-01-20 10:40:34','2022-01-19 18:40:34','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('七里香','<p><img src=\"https://images.pexels.com/photos/8771760/pexels-photo-8771760.jpeg?cs=srgb&amp;dl=pexels-sean-valentine-8771760.jpg&amp;fm=jpg\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"386.29\" height=\"579.43\"/><br/></p><p>七里香 - 周杰伦</p><p>词：方文山</p><p>曲：周杰伦</p><p>编曲：钟兴民</p><p>窗外的麻雀在电线杆上多嘴</p><p>你说这一句很有夏天的感觉</p><p>手中的铅笔在纸上来来回回</p><p>我用几行字形容你是我的谁</p><p>秋刀鱼的滋味猫跟你都想了解</p><p>初恋的香味就这样被我们寻回</p><p>那温暖的阳光像刚摘的鲜艳草莓</p><p>你说你舍不得吃掉这一种感觉</p><p>雨下整夜我的爱溢出就像雨水</p><p>院子落叶跟我的思念厚厚一叠</p><p>几句是非也无法将我的热情冷却</p><p>你出现在我诗的每一页</p><p>雨下整夜我的爱溢出就像雨水</p><p>窗台蝴蝶像诗里纷飞的美丽章节</p><p>我接着写</p><p>把永远爱你写进诗的结尾</p><p>你是我唯一想要的了解</p><p>雨下整夜我的爱溢出就像雨水</p><p>院子落叶跟我的思念厚厚一叠</p><p>几句是非也无法将我的热情冷却</p><p>你出现在我诗的每一页</p><p>那饱满的稻穗幸福了这个季节</p><p>而你的脸颊像田里熟透的蕃茄</p><p>你突然对我说七里香的名字很美</p><p>我此刻却只想亲吻你倔强的嘴</p><p>雨下整夜我的爱溢出就像雨水</p><p>院子落叶跟我的思念厚厚一叠</p><p>几句是非也无法将我的热情冷却</p><p>你出现在我诗的每一页</p><p>整夜我的爱溢出就像雨水</p><p>窗台蝴蝶像诗里纷飞的美丽章节</p><p>我接着写</p><p>把永远爱你写进诗的结尾</p><p>你是我唯一想要的了解</p>','2022-01-24 17:58:43','2022-01-24 01:58:42','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('晴天','<p><img src=\"https://images.pexels.com/photos/10890520/pexels-photo-10890520.jpeg?cs=srgb&amp;dl=pexels-artem-korsakov-10890520.jpg&amp;fm=jpg\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"30%\"/></p><p>晴天 - 周杰伦 (Jay Chou)</p><p>词：周杰伦</p><p>曲：周杰伦</p><p>编曲：周杰伦</p><p>故事的小黄花</p><p>从出生那年就飘着</p><p>童年的荡秋千</p><p>随记忆一直晃到现在</p><p>Re So So Si Do Si La</p><p>So La Si Si Si Si La Si La So</p><p>吹着前奏望着天空</p><p>我想起花瓣试着掉落</p><p>为你翘课的那一天</p><p>花落的那一天</p><p>教室的那一间</p><p>我怎么看不见</p><p>消失的下雨天</p><p>我好想再淋一遍</p><p>没想到失去的勇气我还留着</p><p>好想再问一遍</p><p>你会等待还是离开</p><p>刮风这天我试过握着你手</p><p>但偏偏雨渐渐大到我看你不见</p><p>还要多久我才能在你身边</p><p>等到放晴的那天也许我会比较好一点</p><p>从前从前有个人爱你很久</p><p>但偏偏风渐渐把距离吹得好远</p><p>好不容易又能再多爱一天</p><p>但故事的最后你好像还是说了拜拜</p><p>为你翘课的那一天</p><p>花落的那一天</p><p>教室的那一间</p><p>我怎么看不见</p><p>消失的下雨天</p><p>我好想再淋一遍</p><p>没想到失去的勇气我还留着</p><p>好想再问一遍</p><p>你会等待还是离开</p><p>刮风这天我试过握着你手</p><p>但偏偏雨渐渐大到我看你不见</p><p>还要多久我才能在你身边</p><p>等到放晴的那天也许我会比较好一点</p><p>从前从前有个人爱你很久</p><p>偏偏风渐渐把距离吹得好远</p><p>好不容易又能再多爱一天</p><p>但故事的最后你好像还是说了拜拜</p><p>刮风这天我试过握着你手</p><p>但偏偏雨渐渐大到我看你不见</p><p>还要多久我才能够在你身边</p><p>等到放晴那天也许我会比较好一点</p><p>从前从前有个人爱你很久</p><p>但偏偏雨渐渐把距离吹得好远</p><p>好不容易又能再多爱一天</p><p>但故事的最后你好像还是说了拜</p>','2022-01-24 18:01:16','2022-01-24 02:01:16','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0),('稻香','<p><img src=\"https://images.pexels.com/photos/2564842/pexels-photo-2564842.jpeg?cs=srgb&amp;dl=pexels-jos%C3%A9-luis-photographer-2564842.jpg&amp;fm=jpg\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"30%\"/></p><p>稻香 - 周杰伦</p><p>词：周杰伦</p><p>曲：周杰伦</p><p>对这个世界如果你有太多的抱怨</p><p>跌倒了就不敢继续往前走</p><p>为什么人要这么的脆弱堕落</p><p>请你打开电视看看</p><p>多少人为生命在努力勇敢的走下去</p><p>我们是不是该知足</p><p>珍惜一切就算没有拥有</p><p>还记得你说家是唯一的城堡</p><p>随着稻香河流继续奔跑</p><p>微微笑 小时候的梦我知道</p><p>小时候的梦我知道</p><p>不要哭让萤火虫带着你逃跑</p><p>乡间的歌谣永远的依靠</p><p>回家吧 回到最初的美好</p><p>回到最初的美好</p><p>不要这么容易就想放弃</p><p>就像我说的</p><p>追不到的梦想换个梦不就得了</p><p>为自己的人生鲜艳上色</p><p>先把爱涂上喜欢的颜色</p><p>笑一个吧</p><p>功成名就不是目的</p><p>让自己快乐快乐这才叫做意义</p><p>童年的纸飞机</p><p>现在终于飞回我手里</p><p>所谓的那快乐</p><p>赤脚在田里追蜻蜓追到累了</p><p>偷摘水果被蜜蜂给叮到怕了</p><p>谁在偷笑呢</p><p>我靠着稻草人</p><p>吹着风 唱着歌 睡着了</p><p>午后吉它在虫鸣中更清脆</p><p>阳光洒在路上就不怕心碎</p><p>珍惜一切 就算没有拥有</p><p>还记得你说家是唯一的城堡</p><p>随着稻香河流继续奔跑</p><p>微微笑 小时候的梦我知道</p><p>小时候的梦我知道</p><p>不要哭让萤火虫带着你逃跑</p><p>乡间的歌谣永远的依靠</p><p>回家吧 回到最初的美好</p><p>回到最初的美好</p><p>还记得你说家是唯一的城堡</p><p>随着稻香河流继续奔跑</p><p>微微笑 小时候的梦我知道</p><p>不要哭让萤火虫带着你逃跑</p><p>乡间的歌谣永远的依靠</p><p>回家吧 回到最初的美好</p>','2022-01-24 18:03:09','2022-01-24 02:03:08','1','1453630075679944706','生活','1453628937568137218','影视动漫',0,NULL,'','',0);
/*!40000 ALTER TABLE `article_list_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_sec_category`
--

DROP TABLE IF EXISTS `article_sec_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_sec_category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT '' COMMENT '二级文章分类名称',
  `parent_id` int(10) DEFAULT NULL COMMENT '一级分类的id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_sec_category`
--

LOCK TABLES `article_sec_category` WRITE;
/*!40000 ALTER TABLE `article_sec_category` DISABLE KEYS */;
INSERT INTO `article_sec_category` VALUES (1,'穿搭',1),(2,'时尚',1),(3,'养生',1),(4,'旅游',1),(5,'宠物',1),(6,'游戏',1),(7,'钓鱼',2),(8,'财经',2),(9,'体育',2),(10,'NBA',2),(11,'股票',2),(12,'彩票',2),(13,'电脑',3),(14,'手机',3),(15,'摄影',3),(16,'动物',3),(17,'美文',3),(18,'国风',3),(19,'科学',3),(20,'文化',3),(21,'影视',4),(22,'动漫',4);
/*!40000 ALTER TABLE `article_sec_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `component` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL DEFAULT '3' COMMENT '角色权限',
  `link` varchar(255) NOT NULL DEFAULT '',
  `remark` varchar(255) NOT NULL DEFAULT '',
  `icon` varchar(255) NOT NULL,
  `visible` int(11) NOT NULL DEFAULT '0' COMMENT '是否显示在侧边栏',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '菜单状态，是否停用',
  `parent_id` int(11) NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (3,'个人中心','personal','personal','3','','','Mount',0,1,0),(4,'多级菜单','multilevel-menu','multilevel-menu','3','','','Menu',0,1,0),(5,'一级菜单','first-menu','multilevel-menu/first-menu','3','','','Menu',0,1,4);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(255) NOT NULL DEFAULT '3' COMMENT '角色权限',
  `role_name` varchar(255) NOT NULL DEFAULT '普通用户' COMMENT '权限中文名',
  `is_delete` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `nick_name` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif' COMMENT '用户头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1b60f60f-942e-4265-9a0e-2235277b9c8b','admin','123456','3','普通用户',0,'小火车况且况且','https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif'),('1c0a28b4-d2e4-44c8-8801-e09330279366','liuzhao','123456','3','普通用户',1,'小飞机呼哧呼哧','https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif'),('d8d20594-8533-4ac7-9e65-86da256cbf34','test','123456','3','普通用户',0,'test','https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_channel`
--

DROP TABLE IF EXISTS `user_channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_channel` (
  `id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL COMMENT '用户的id',
  `channel` json NOT NULL COMMENT '频道的数据',
  `is_deleted` int(11) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_channel_id_IDX` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用户首页的频道';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_channel`
--

LOCK TABLES `user_channel` WRITE;
/*!40000 ALTER TABLE `user_channel` DISABLE KEYS */;
INSERT INTO `user_channel` VALUES ('1462733309694578690','1','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0),('1462733309736521729','1437752089160785923','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0),('1462733309807824898','1461607075485044737','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0),('1462733309807824899','1461627048177684481','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0),('1462733309807824900','2','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0),('1462751813550387202','1462751813009321985','[{\"id\": \"1\", \"label\": \"推荐\"}, {\"id\": \"1453629493032398850\", \"label\": \"时尚\"}, {\"id\": \"1453629641007443969\", \"label\": \"体育\"}, {\"id\": \"1453629861791412226\", \"label\": \"手机\"}, {\"id\": \"1453630075679944706\", \"label\": \"生活\"}]',0);
/*!40000 ALTER TABLE `user_channel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(20) NOT NULL COMMENT '权限的名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,'超级管理员'),(2,'管理员'),(3,'普通用户');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'server-mysql'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24 15:34:58
