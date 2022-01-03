package com.example.demo.service;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Iterable<Admin> findAll() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<Admin> findById(Long id) {
        return adminRepository.findById(id);
    }

    @Override
    public void save(Admin admin) {
        adminRepository.save(admin);
    }

    @Override
    public void remove(Long id) {
        adminRepository.deleteById(id);
    }

    @Override
    public List<Admin> findAllByAccountContaining(String name) {
        return adminRepository.findAllByAccountContaining(name);
    }
}
