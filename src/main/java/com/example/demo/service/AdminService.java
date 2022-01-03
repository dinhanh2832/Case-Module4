package com.example.demo.service;

import com.example.demo.model.Admin;

import java.util.List;

public interface AdminService extends GeneralService<Admin> {
    List<Admin> findAllByAccountContaining(String name);
}
