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
  `parent_category_name` varchar(255) DEFAULT NULL COMMENT '父级的名称，为null说明是顶级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_category`
--

LOCK TABLES `article_category` WRITE;
/*!40000 ALTER TABLE `article_category` DISABLE KEYS */;
INSERT INTO `article_category` VALUES ('087fc1c4-e198-41df-bbae-26ff333d1ebb','文化','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('15a943e2-b21c-465c-9d30-15340e6af3a7','彩票','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经'),('1edd8601-f68f-4f25-b4c5-11b4dea46507','国风','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('29e5c8c8-fa38-4cbd-850d-8d16567f8b89','摄影','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('2fd31224-7cb7-4a9d-b877-21a333bcdb80','影视动漫',NULL,NULL,NULL),('362d2c83-05a6-4a05-b41b-520f6106ceb6','手机','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('4393832e-952f-432a-9370-2849ea351239','穿搭','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('4d9c01e7-d7c2-450d-b98b-c0816a4df6b0','体育财经',NULL,NULL,NULL),('510c8855-681f-4138-97e3-b1056ad7f6c4','旅游','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('53d2fea4-162b-4138-9f69-1be70a116841','养生','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('61bcc2a5-0800-4830-a12e-634c05978f25','股票','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经'),('698ec99b-5f42-4616-b583-a3b894ce90b2','宠物','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('6b0cf39e-f15d-4ee6-8adb-272a588fc3c1','时尚','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('6cec4e2d-0fa1-41ea-bfdb-b395d0af3855','生活娱乐',NULL,NULL,NULL),('8a7e34aa-a95a-44a6-8dd3-0068a7d0d9ab','体育','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经'),('944652fb-fbc2-452a-8dff-34ccc0e8983e','影视','2fd31224-7cb7-4a9d-b877-21a333bcdb80',NULL,'影视动漫'),('9b48dc62-6b3b-4ef5-823a-cdbccafca220','科技文艺',NULL,NULL,NULL),('aad9d02f-196f-4f2b-be0f-7f24c040755a','科学','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('b7f88cbc-03dd-4acb-80ef-153b50b73ce4','钓鱼','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经'),('bdf1b08b-63b8-462a-80f3-4fdf386c7192','游戏','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855',NULL,'生活娱乐'),('c395100e-3f92-4451-9932-7ede06719e26','动漫','2fd31224-7cb7-4a9d-b877-21a333bcdb80',NULL,'影视动漫'),('cf7dac6b-649f-4510-8d17-f8d852d255b5','美文','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('d2aaf1a2-3891-4176-b381-0494bfb8b223','动物','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('e7e0c043-5e2e-407f-9313-517039ff3ea4','电脑','9b48dc62-6b3b-4ef5-823a-cdbccafca220',NULL,'科技文艺'),('f623b46c-73ea-4031-adc5-071298dec712','NBA','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经'),('f87258fc-8c21-4bdf-84ae-b9d06943ab42','财经','4d9c01e7-d7c2-450d-b98b-c0816a4df6b0',NULL,'体育财经');
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
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `update_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `user_id` varchar(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `category_id` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_parent_id` varchar(255) NOT NULL,
  `category_parent_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `cover_images` varchar(255) DEFAULT NULL,
  `reject_reason` varchar(255) DEFAULT NULL,
  `is_delete` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `content` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_list`
--

LOCK TABLES `article_list` WRITE;
/*!40000 ALTER TABLE `article_list` DISABLE KEYS */;
INSERT INTO `article_list` VALUES ('4207adfe-9132-46f1-a3d4-40769bfe4108','各位于晏大家好','2024-05-07 11:02:25.733309','2024-05-07 11:02:25.733309','1b60f60f-942e-4265-9a0e-2235277b9c8b','小火车况且况且','4393832e-952f-432a-9370-2849ea351239','穿搭','6cec4e2d-0fa1-41ea-bfdb-b395d0af3855','生活娱乐',1,NULL,NULL,0,'<p>各位于晏大家好</p><p><br/><img src=\"https://tse1-mm.cn.bing.net/th/id/R-C.7ffb56c706d855c058a6c6c92f2acce5?rik=RxoQJDrpgvYRXw&amp;riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fPeople%2fmales%2f20180517%2f3c52c57b83c2c10b77311f3b873020c0.jpg&amp;ehk=yOwWxxFnzQB6jABWBJDMZthGM5WPk5fAiue3Qxuk3FU%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0\" style=\"max-width:100%;\" contenteditable=\"false\" width=\"430.63\" height=\"269.13\"/>&nbsp; &nbsp;&nbsp;</p><p><br/></p><hr/><p><br/></p><img src=\"https://tse4-mm.cn.bing.net/th/id/OIP-C._tsTWfGvUudQ0j_0jerorQHaHa?pid=ImgDet&amp;rs=1\" alt=\"彭于晏\" width=\"352\" height=\"352\"/><br/>');
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
  `nick_name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `openid` varchar(255) NOT NULL COMMENT '微信登录的 openid',
  `phone` int(11) DEFAULT NULL,
  `avatar` longtext NOT NULL COMMENT '用户头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('1b60f60f-942e-4265-9a0e-2235277b9c8b','admin','123456','3','普通用户',0,'小火车况且况且','',0,'https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png'),('1c0a28b4-d2e4-44c8-8801-e09330279366','liuzhao','123456','3','普通用户',1,'💯','',0,'https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png'),('d8d20594-8533-4ac7-9e65-86da256cbf34','test','123456','3','普通用户',0,'test','',0,'https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png'),('f09dbd30-55f9-4672-9abb-c0b7a39bfcb0','oMW1d5auuML6Ip76g1fHLxir5ljU','oMW1d5auuML6Ip76g1fHLxir5ljU','3','普通用户',0,'💯','oMW1d5auuML6Ip76g1fHLxir5ljU',NULL,'data:image/png;base64,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');
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

-- Dump completed on 2024-06-04 17:03:10
