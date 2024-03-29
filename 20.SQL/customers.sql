CREATE DATABASE ORG;

USE ORG;

SHOW DATABASES;

CREATE TABLE Worker(
	WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME VARCHAR(25),
    LAST_NAME VARCHAR(25),
    SALARY INT(15),
    JOINING_DATE DATETIME,
    DEPARTMENT VARCHAR(25)
);

INSERT INTO Worker(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
	(001, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR'),
    (002, 'Niharika', 'Verma', 80000, '14-02-11 09.00.00', 'Admin'),
    (003, 'Vishal', 'Singhal', 300000, '14-02-20 09.00.00', 'HR'),
    (004, 'Amitabh', 'Singh', 500000, '14-02-20 09.00.00', 'Admin'),
    (005, 'Vivek', 'Bhati', 500000, '14-06-11 09.00.00', 'Admin'),
    (006, 'Vipul', 'Diwan', 200000, '14-06-11 09.00.00', 'Account'),
    (007, 'Satish', 'Kumar', 75000, '14-01-20 09.00.00', 'Account'),
    (008, 'Geetika', 'Chauhan', 90000, '14-04-11 09.00.00', 'Admin');
    
SELECT * FROM Worker;

CREATE TABLE Bonus(
	WORKER_REF_ID INT,
    BONUS_AMOUNT INT(10),
    BONUS_DATE DATETIME,
    FOREIGN KEY (WORKER_REF_ID) REFERENCES Worker(WORKER_ID) ON DELETE CASCADE
);

INSERT INTO Bonus(WORKER_REF_ID, BONUS_AMOUNT, BONUS_DATE) VALUES
	(001, 5000, '16-02-20'),
    (002, 3000, '16-06-11'),
    (003, 4000, '16-02-20'),
    (001, 4500, '16-02-20'),
    (002, 3500, '16-06-11');
    
SELECT * FROM Bonus;

CREATE TABLE Title(
	WORKER_REF_ID INT,
    WORKER_TITLE CHAR(25),
    AFFECTED_FROM DATETIME,
    FOREIGN KEY (WORKER_REF_ID) REFERENCES Worker(WORKER_ID) ON DELETE CASCADE
);

INSERT INTO Title(WORKER_REF_ID, WORKER_TITLE, AFFECTED_FROM) VALUES
	(001, 'Manager', '2016-02-20 00.00.00'),
	(002, 'Executive', '2016-06-11 00.00.00'),
	(008, 'Executive', '2016-06-11 00.00.00'),
	(005, 'Manager', '2016-06-11 00.00.00'),
	(004, 'Asst. Manager', '2016-06-11 00.00.00'),
	(007, 'Executive', '2016-06-11 00.00.00'),
	(006, 'Lead', '2016-06-11 00.00.00'),
	(003, 'Lead', '2016-06-11 00.00.00');

SELECT * FROM Title;

SELECT * FROM ORG.Worker;

SELECT FIRST_NAME, SALARY FROM ORG.Worker;

SELECT * FROM ORG.Worker WHERE SALARY>80000;

-- salary[30000, 100000]
SELECT * FROM Worker WHERE SALARY between 30000 AND 100000;

-- reduce OR statements
-- HR Admin
SELECT * FROM ORG.Worker WHERE DEPARTMENT = 'HR' OR DEPARTMENT = 'Admin';

-- better way: IN
SELECT * FROM ORG.Worker WHERE DEPARTMENT IN( 'HR', 'Admin');

SELECT * FROM ORG.Worker WHERE DEPARTMENT NOT IN( 'HR', 'Admin');

SELECT * FROM ORG.Worker WHERE DEPARTMENT is NULL;

-- WILDCARDS
SELECT * FROM ORG.Worker WHERE FIRST_NAME LIKE '%k_';
SELECT * FROM ORG.Worker WHERE FIRST_NAME LIKE '%i%';

-- SORTING
-- Asending order(ASC)
SELECT * FROM ORG.Worker ORDER BY SALARY;
-- Descending order
SELECT * FROM ORG.Worker ORDER BY SALARY DESC;

-- DISTINCT KEYWORD
SELECT DEPARTMENT FROM ORG.Worker;
SELECT DISTINCT DEPARTMENT FROM ORG.Worker;

-- Data Grouping
-- Find no of emp. working in different department
SELECT DEPARTMENT FROM ORG.Worker GROUP BY DEPARTMENT;
-- Jo name select aur from ke baad hoga usi ko grp by ke baad likhna hai
-- iska output same distinct ke jaisa hai
-- bcoz without using grp by function (grpouping isiliye nhi hui hai)
SELECT DEPARTMENT, COUNT(*) FROM ORG.Worker GROUP BY DEPARTMENT; 
-- Better practise
SELECT DEPARTMENT, COUNT(DEPARTMENT) FROM ORG.Worker GROUP BY DEPARTMENT; 
-- agar aggregation nhi provide krenge(grp by ke sath) toh uska internal working DISTINCT ki trh work krega
-- agar agg. apply kr di gyi hai toh internal working me phle usko phle reaarange krega

-- Average salary PER DEPARTMENT
SELECT DEPARTMENT, AVG(SALARY) FROM ORG.Worker GROUP BY DEPARTMENT;
-- MIN SALARY PER DEPARTMENT
SELECT DEPARTMENT, MIN(SALARY) FROM ORG.Worker GROUP BY DEPARTMENT;

-- MAX SALARY PER DEPARTMENT
SELECT DEPARTMENT, MAX(SALARY) FROM ORG.Worker GROUP BY DEPARTMENT;

-- SUM SALARY PER DEPARTMENT
SELECT DEPARTMENT, SUM(SALARY) FROM ORG.Worker GROUP BY DEPARTMENT;

-- SELECT:FROM::HAVING:GROUP BY
SELECT DEPARTMENT, COUNT(DEPARTMENT) FROM ORG.Worker GROUP BY DEPARTMENT HAVING COUNT(DEPARTMENT) > 2;
SELECT DEPARTMENT, COUNT(DEPARTMENT) FROM ORG.Worker GROUP BY DEPARTMENT HAVING COUNT(DEPARTMENT) > 1;

-- DDL(Data Definition Language - Constraints)
	-- PRIMARY KEY Constaint
		-- NOT NULL, UNIQUE, ONLY ONE PRIMARY KEY PER TABLE, RECOMMENDED INT
	-- FOREIGN KEY
		-- REFERS PK OF SOME OTHER TABLE
	-- UNIQUE
		-- KOI AISA ATTRIBUTE HAI JO UNIQUE HONA CHAHIYE 
        -- EX : NAME VARCHAR(255) UNIQUE;
	-- CHECK
		-- EX:  BALANCE INT,
		--	    CONSTRAINT ACC_BALANCE_CHK CHECK(BALANCE > 1000);
	
	-- DEFAULT
		-- BALANCE INT NOT NULL DEFAULT 0,
        
-- An attribute can be primary key as well as foreign key both

-- ADD NEW COLUMN
ALTER TABLE ORG.Worker ADD address varchar(255);
SELECT * FROM ORG.Worker_details;

-- MODIFY 
    ALTER TABLE ORG.Worker MODIFY address CHAR(255);    
    
DESC ORG.Worker_details;

-- rename column
ALTER TABLE ORG.Worker CHANGE COLUMN address Address VARCHAR(255);

DESC ORG.Worker;

-- DROP COLUMN 
ALTER TABLE ORG.Worker DROP COLUMN Address;

-- rename table
ALTER TABLE ORG.Worker RENAME TO ORG.Worker_details;

-- DML(DATA MODIFICATION LANGUAGE)
	-- INSERT
		-- INSERT INTO ORG.Worker(...) VALUES(... , ..., ...);
        -- INSERT OR IGNORE INTO ...;
    -- UPDATE
		 UPDATE ORG.Worker_details SET SALARY = 1000000, LAST_NAME = 'Singh' WHERE WORKER_ID = 2;
         -- UPDATE MULTIPLE ROWS
			UPDATE ORG.Worker_details SET LAST_NAME = 'Singh';
			-- You will get a message saying: You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.000 sec
				SET SQL_SAFE_UPDATES = 0;
				UPDATE ORG.Worker_details SET LAST_NAME = 'Singh';
    -- DELETE
		DELETE FROM ORG.Worker_details WHERE WORKER_ID = 8;
        DELETE FROM ORG.Worker_details;