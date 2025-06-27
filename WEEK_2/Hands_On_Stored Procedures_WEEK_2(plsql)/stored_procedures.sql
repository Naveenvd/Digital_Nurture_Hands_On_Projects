
SET SERVEROUTPUT ON;


BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Accounts';
  EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/


CREATE TABLE Accounts (
  AccountID NUMBER PRIMARY KEY,
  AccountType VARCHAR2(20),
  Balance NUMBER(10,2)
);


INSERT INTO Accounts VALUES (1001, 'Savings', 1000);
INSERT INTO Accounts VALUES (1002, 'Savings', 2800);
INSERT INTO Accounts VALUES (1003, 'Current', 8000);


CREATE TABLE Employees (
  EmpID NUMBER PRIMARY KEY,
  Name VARCHAR2(50),
  DepartmentID NUMBER,
  Salary NUMBER(10,2)
);


INSERT INTO Employees VALUES (1, 'Ramcharan', 101, 300000);
INSERT INTO Employees VALUES (2, 'Vijay', 101, 3500000);
INSERT INTO Employees VALUES (3, 'Naveen', 102, 4000000);

COMMIT;

--  1: Monthly Interest on Savings Accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE Accounts
  SET Balance = Balance * 1.01
  WHERE AccountType = 'Savings';

  DBMS_OUTPUT.PUT_LINE('✅ Interest applied to all savings accounts.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('❌ Error in ProcessMonthlyInterest: ' || SQLERRM);
END;
/


--  2: Bonus to Employees of a Department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_DepartmentID IN NUMBER,
  p_BonusPercent IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_BonusPercent / 100)
  WHERE DepartmentID = p_DepartmentID;

  DBMS_OUTPUT.PUT_LINE('✅ Bonus applied to Department ID: ' || p_DepartmentID);
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('❌ Error in UpdateEmployeeBonus: ' || SQLERRM);
END;
/


-- 3: Transfer Funds Between Accounts

CREATE OR REPLACE PROCEDURE TransferFunds (
  p_FromAccountID IN NUMBER,
  p_ToAccountID IN NUMBER,
  p_Amount IN NUMBER
) AS
  v_FromBalance NUMBER;
BEGIN
  -- Check balance
  SELECT Balance INTO v_FromBalance
  FROM Accounts
  WHERE AccountID = p_FromAccountID
  FOR UPDATE;

  IF v_FromBalance < p_Amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
  END IF;

  -- Perform transfer
  UPDATE Accounts
  SET Balance = Balance - p_Amount
  WHERE AccountID = p_FromAccountID;

  UPDATE Accounts
  SET Balance = Balance + p_Amount
  WHERE AccountID = p_ToAccountID;

  DBMS_OUTPUT.PUT_LINE('✅ Transfer of ' || p_Amount || ' from Account ' || p_FromAccountID || ' to Account ' || p_ToAccountID || ' successful.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('❌ Error in TransferFunds: ' || SQLERRM);
    ROLLBACK;
END;
/


BEGIN
  ProcessMonthlyInterest;

  UpdateEmployeeBonus(101, 10); 

  TransferFunds(1002, 1003, 500);  
END;
/


SELECT * FROM Accounts;
SELECT * FROM Employees;
