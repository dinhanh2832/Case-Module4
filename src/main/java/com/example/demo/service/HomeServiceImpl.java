package com.example.demo.service;

import com.example.demo.model.Comment;
import com.example.demo.model.Home;
import com.example.demo.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HomeServiceImpl implements HomeService {
    @Autowired
    private HomeRepository homeRepository;

    @Override
    public Iterable<Home> findAll() {
        return homeRepository.findAll();
    }

    @Override
    public Optional<Home> findById(Long id) {
        return homeRepository.findById(id);
    }

    @Override
    public void save(Home home) {
        homeRepository.save(home);
    }

    @Override
    public void remove(Long id) {
        homeRepository.deleteById(id);
    }

    @Override
    public List<Home> findAllByNameContaining(String name) {
        return homeRepository.findAllByNameContaining(name);
    }

    @Override
    public Iterable<Home> findAllByStatusLike1() {
        return homeRepository.findAllByStatusLike1();
    }

    @Override
    public Iterable<Home> findAllByStatusLike2() {
        return homeRepository.findAllByStatusLike2();
    }

    @Override
    public Iterable<Home> findAllHomeByStatusOfUser(Long id) {
        return homeRepository.findAllHomeByStatusOfUser(id);
    }

    @Override
    public void delete(Home entity) {
        homeRepository.delete(entity);
    }

    @Override
    public Iterable<Home> find5HomeMostRated() {
        return homeRepository.find5HomeMostRated();
    }

    @Override
    public Iterable<Home> showHomeOrderByDESC() {
        return homeRepository.showHomeOrderByDESC();
    }

    @Override
    public Iterable<Home> findAllByAddressContaining(String address) {
        return homeRepository.findAllByAddressContaining(address);
    }
}
