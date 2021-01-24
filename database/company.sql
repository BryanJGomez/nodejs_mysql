-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-01-2021 a las 07:41:10
-- Versión del servidor: 8.0.22
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `company`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`bryanJ`@`%` PROCEDURE `empleadoAddOrEdit` (IN `_id` INT, IN `_nombre` VARCHAR(45), IN `_salario` INT)  BEGIN 
 	if _id = 0 THEN
        INSERT INTO empleados (nombre, salario)
        VALUES (_nombre, _salario );
        SET _id = last_insert_id();
    ELSE
    	UPDATE empleados
        SET nombre = _nombre,
        	salario = _salario
        WHERE id = _id;
   END IF;
   SELECT _id AS id;
 END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `salario` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `salario`) VALUES
(1, 'bryan', 200),
(2, 'joel', 200),
(3, 'holaaaa', 500),
(4, 'jo', 500),
(5, 'alex', 200),
(6, 'lopez', 200),
(7, 'messirve', 500),
(8, 'nomessirve', 500),
(10, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
