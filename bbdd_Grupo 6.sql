-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: caccomision24102grupo6
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Argentina','pepe@gmail.com','Pepe','Garcia','$2a$10$oO2t71UyH7p04okhy2CfbuiAIiylZkY3ffNpDtr6ghT2teO.gEH5S'),(3,'Argentina','alejandrogriveiro@gmail.com','Gabriel Alejandro','Riveiro','$2a$10$e5NQeF0g6fT2mAxdmQFtd.csgqn3hVq2yzzwDqgc6H6T8MGlTY1ki'),(4,'Argentina','Raul@gmail.com','Raul','Garcia','$2a$10$3uhLESAP9qOp44AEnf.z1uQOckcKYwtzlVKh99iCxYBBfybdJsEgW'),(5,'Argentina','susana@gmail.com','Susana','Rodriguez','$2a$10$uGfbDk0c2EqPtsIfJKrSRuabsZmBc1/B9QDWJjJQ/8kj/zoVI4u8y'),(6,'Argentina','alejandrogriveiro@gmail.com','Gabriel Alejandro','Riveiro','$2a$10$dn2JLmTMqHoj1qTkjzjSIOm8/JFz0D.q52kPyIa9Luw7vnVsH5ABq'),(8,'Argentina','sandralopez@gmail.com','Sandra','Lopez','$2a$10$KDAt72k4eADSbUYnVetVdO0F2t1UDLOgzKd6CXdjaYTshQgTRwIpO'),(10,'Bolivia','damian@gmail.com','Damian','Loco','$2a$10$gdu1UTowHJKL2OjCu9CdPO/5IzAekZELpTi3t06ZXQmRLfw1nX.k6'),(11,'Argentina','alejandrogriveiro@gmail.com','Gabriel Alejandro','Riveiro','$2a$10$AfHN246C3MM75OfWZPW8neuC2hIWpJdFvoPEYtAhC4n/na8vc3PAO'),(12,'Argentina','fatima@gmail.com','Fatima','Rodriguez','$2a$10$2c4RtkmHX7VipZ6qNM2/yO3rM6buJWnS3M1JK7kmD7V.aSlw8u5Au'),(13,'Chile','mariaperez@gmail.com','maria','perez','$2a$10$9h02f1tn4LdEG8rLauD72O3S88apwoYICemH0UQ/gNwM03J/lh5ne'),(14,'Brasil','raulgomez@hotmail.com','raul','Gomez','$2a$10$0.1F3dpDVfXWO6QE.yuvHuDahpTBvLgf.UlSE9tbMHjai0lLiZDb2');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-02 13:09:42
