
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
  EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
  WHEN OTHERS THEN NULL; 
END;
/


CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(100),
  Age NUMBER,
  Balance NUMBER(10,2),
  IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

    
CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  InterestRate NUMBER(5,2),
  DueDate DATE,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert data
INSERT INTO Customers VALUES (1, 'ram', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'sam', 45, 8600, 'FALSE');
INSERT INTO Customers VALUES (3, 'kumar', 70, 19000, 'FALSE');
INSERT INTO Customers VALUES (4, 'siva', 30, 50000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 8.5, SYSDATE + 10); -- Due in 10 days
INSERT INTO Loans VALUES (102, 2, 9.0, SYSDATE + 45); -- Due in 45 days
INSERT INTO Loans VALUES (103, 3, 7.5, SYSDATE + 5);  -- Due in 5 days
INSERT INTO Loans VALUES (104, 4, 8.0, SYSDATE + 20); -- Due in 20 days

COMMIT;
/

--  Apply discount for Age > 60
BEGIN
  FOR customer_rec IN (SELECT CustomerID FROM Customers WHERE Age > 60) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = customer_rec.CustomerID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('✅ Scenario 1: Interest rate discount applied.');
END;
/

--  Promote VIP if Balance > 10000
BEGIN
  FOR cust IN (SELECT CustomerID FROM Customers WHERE Balance > 10000) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('✅ Scenario 2: VIP status updated.');
END;
/

--  Print loan reminders
BEGIN
  DBMS_OUTPUT.PUT_LINE('📢 Scenario 3: Loan Reminders (due in 30 days):');
  FOR rec IN (
    SELECT l.LoanID, c.CustomerName, l.DueDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('- Loan ID ' || rec.LoanID || 
                         ' for ' || rec.CustomerName || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/


SELECT * FROM Customers;
SELECT * FROM Loans;
