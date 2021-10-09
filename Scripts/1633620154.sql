
IF DB_ID('StudentCourseManagement') IS NULL
BEGIN
	CREATE DATABASE StudentCourseManagement
END
GO

USE StudentCourseManagement
Go

IF NOT (EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'Courses'))
BEGIN
    CREATE TABLE Courses(
		Id INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
		Name NVARCHAR(100) NOT NULL,
		Code NVARCHAR(500) NOT NULL,
		Teacher NVARCHAR(500) NOT NULL,
		StartDate SMALLDATETIME NOT NULL,
		EndDate SMALLDATETIME NOT NULL
	);
END
GO

IF NOT(EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'Students'))
BEGIN
    CREATE TABLE Students(
		Id INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
		FirstName NVARCHAR(500) NOT NULL,
		Surname NVARCHAR(500) NOT NULL,
		Gender NVARCHAR(10) NOT NULL,
		DateOfBirth SMALLDATETIME NOT NULL,
		Address1 NVARCHAR(200) NULL,
		Address2 NVARCHAR(200) NULL,
		Address3 NVARCHAR(200) NULL
	);
END
GO

IF NOT(EXISTS (SELECT * 
                 FROM INFORMATION_SCHEMA.TABLES 
                 WHERE TABLE_SCHEMA = 'dbo' 
                 AND  TABLE_NAME = 'Subscriptions'))
BEGIN
    CREATE TABLE Subscriptions(
		Id INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
		IdStudent int NOT NULL,
		IdCourse int NOT NULL,
		CONSTRAINT Fk_Subscriptions_Students FOREIGN KEY (IdStudent) REFERENCES Students(Id),
		CONSTRAINT Fk_Subscriptions_Courses FOREIGN KEY (IdCourse) REFERENCES Courses(Id),
	);
END
GO

