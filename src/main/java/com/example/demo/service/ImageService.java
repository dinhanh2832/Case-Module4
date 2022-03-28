package com.example.demo.service;

import com.example.demo.model.Image;

public interface ImageService extends GeneralService<Image> {
    Iterable<Image> findImgByIdHome(Long idH);

    Iterable<Image> findAllImgByIdHome(Long idH);
}
