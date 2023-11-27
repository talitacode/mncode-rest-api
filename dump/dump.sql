USE `bd_mncode`;

CREATE TABLE IF NOT EXISTS `equipe` (
  `id_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `nome_pessoa` varchar(240) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  PRIMARY KEY (`id_pessoa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `equipe` DISABLE KEYS */;
INSERT INTO `equipe` (`id_pessoa`, `nome_pessoa`, `cargo`) VALUES
	(1, 'Marcos de Souza', 'Designer'),
	(2, 'Renata Guimarães', 'Desenvolvedora'),
	(3, 'Larissa Garcia', 'Desenvolvedora');
/*!40000 ALTER TABLE `equipe` ENABLE KEYS */;