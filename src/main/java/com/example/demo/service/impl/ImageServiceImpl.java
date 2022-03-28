package com.example.demo.service.impl;

import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;
import com.example.demo.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    private ImageRepository imageRepository;


    @Override
    public Iterable<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    public Optional<Image> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void save(Image image) {
        imageRepository.save(image);
    }

    @Override
    public Iterable<Image> findImgByIdHome(Long idH) {
        return imageRepository.findImgByIdHome(idH);
    }

    @Override
    public Iterable<Image> findAllImgByIdHome(Long idH) {
        return imageRepository.findAllImgByIdHome(idH);
    }
}
