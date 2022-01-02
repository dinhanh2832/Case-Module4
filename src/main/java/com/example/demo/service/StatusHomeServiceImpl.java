package com.example.demo.service;

import com.example.demo.model.StatusHome;
import com.example.demo.repository.StatusHomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StatusHomeServiceImpl implements StatusHomeService {
    @Autowired
    StatusHomeRepository statusHomeRepository;

    @Override
    public Iterable<StatusHome> findAll() {
        return statusHomeRepository.findAll();
    }

    @Override
    public Optional<StatusHome> findById(Long id) {
        return statusHomeRepository.findById(id);
    }

    @Override
    public void save(StatusHome statusHome) {

    }

    @Override
    public void remove(Long id) {

    }

    @Override
    public StatusHome findByName(String name) {
        return statusHomeRepository.findByName(name);
    }
}
