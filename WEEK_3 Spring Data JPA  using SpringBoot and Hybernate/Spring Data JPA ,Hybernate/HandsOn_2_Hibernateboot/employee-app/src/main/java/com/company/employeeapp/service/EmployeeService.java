package com.company.employeeapp.service;

import com.company.employeeapp.model.Employee;
import com.company.employeeapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Integer addEmployee(Employee employee) {
        return employeeRepository.save(employee).getId();
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
