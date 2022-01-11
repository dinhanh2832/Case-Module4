package com.example.demo.controller;

import com.example.demo.model.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Controller
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/homes")
public class HomeRestController {
    @Autowired
    private HomeServiceImpl homeService;
    @Autowired
    private StatusHomeServiceImpl statusHomeService;
    @Autowired
    private ImageServiceImpl imageService;
    @Autowired
    private UserService userService;
    @Autowired
    private CategoryServiceImpl categoryService;

    @GetMapping("")
    public ResponseEntity<Iterable<Home>> findAllHome() {
        Iterable<Home> homes = homeService.findAll();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
    @GetMapping("/listImg")
    public ResponseEntity<Iterable<Image>> findImgByIdHome(Long idH){
        Iterable<Image> image = imageService.findImgByIdHome(idH);
        return new ResponseEntity<>(image, HttpStatus.OK);
    }
    @GetMapping("/findAllImg")
    public ResponseEntity<Iterable<Image>> findAllImg(Long idH){
        Iterable<Image> images = imageService.findAllImgByIdHome(idH);
        return new ResponseEntity<>(images,HttpStatus.OK);
    }
    @GetMapping("/find5HomeMostRated")
    public ResponseEntity<Iterable<Home>> find5HomeMostRated() {
        Iterable<Home> homes = homeService.find5HomeMostRated();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findAllCategory")
    public ResponseEntity<Iterable<Category>> findAllCategory() {
        Iterable<Category> categories = categoryService.findAll();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatus1")
    public ResponseEntity<Iterable<Home>> findHomeByStatus1(String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAllByStatusLike1();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatus2")
    public ResponseEntity<Iterable<Home>> findHomeByStatus2(String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAllByStatusLike2();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findHomeStatus1ByUserId")
    public ResponseEntity<Iterable<Home>> findHomeStatus1ByUserId(@RequestParam Long idU) {
        Iterable<Home> homes = homeService.findAllHomeByStatusOfUser(idU);
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @GetMapping("/findAllStatus")
    public ResponseEntity<Iterable<StatusHome>> findAllStatus() {
        Iterable<StatusHome> statusHomes = statusHomeService.findAll();
        return new ResponseEntity<>(statusHomes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Home> findHomeById(@PathVariable Long id) {
        Optional<Home> home = homeService.findById(id);
        if (!home.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(home.get(), HttpStatus.OK);
    }

    @PostMapping("/createHome")
    public ResponseEntity<Home> saveHome(@RequestBody Home home) {
        homeService.save(home);
        return new ResponseEntity<>(home, HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<Home> edit(Long idH, @RequestBody Home home) {
        Optional<Home> homeOptional = homeService.findById(idH);
        home.setId(homeOptional.get().getId());
        homeService.save(home);
        return new ResponseEntity<>(home, HttpStatus.OK);
    }

    @DeleteMapping("/change1/{id}")
    public ResponseEntity<Home> change1(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<StatusHome> statusHome = statusHomeService.findById(1L);
        homeOptional.get().setStatusHome(statusHome.get());
        homeService.save(homeOptional.get());
        return new ResponseEntity<>(homeOptional.get(), HttpStatus.OK);
    }

    @DeleteMapping("/change2/{id}")
    public ResponseEntity<Home> change2(@PathVariable Long id) {
        Optional<Home> homeOptional = homeService.findById(id);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<StatusHome> statusHome = statusHomeService.findById(2L);
        homeOptional.get().setStatusHome(statusHome.get());
        homeService.save(homeOptional.get());
        return new ResponseEntity<>(homeOptional.get(), HttpStatus.OK);
    }

    @GetMapping("/searchName")
    public ResponseEntity<Iterable<Home>> findByNameContaining(@RequestParam String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.findAll();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity<Home> deleteHome(Long idH) {
        Optional<Home> homeOptional = homeService.findById(idH);
        if (!homeOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        homeService.delete(homeOptional.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/orderByDESC")
    public ResponseEntity<Iterable<Home>> showCommentDESC(String name) {
        Iterable<Home> homes;
        if (name == null) {
            homes = homeService.showHomeOrderByDESC();
        } else {
            homes = homeService.findAllByNameContaining(name);
        }
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
    @PostMapping("/uploadFile")
    public ResponseEntity<List<Image>> uploadFile(MultipartFile[] files) {
        List<Home> homes = (List<Home>) homeService.showHomeOrderByDESC();
        Home home1 = homes.get(0);
        List<Image> list = new ArrayList<>();
        for(int i = 0;i<files.length;i++){
            String fileName1 = files[i].getOriginalFilename();
            String nameImage = "avatar/" + fileName1;
            try {
                FileCopyUtils.copy(files[i].getBytes(),
                        new File("E:\\Case-Module4\\src\\main\\resources\\templates\\sheltek\\images\\avatar\\" + fileName1)); // coppy ảnh từ ảnh nhận được vào thư mục quy định,
                // đường dẫn ảo là /nhuanh/
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            if(i == 0){
                Image image2 = new Image(nameImage,1,home1);
                list.add(image2);
                imageService.save(image2);
            } else {
                Image image2 = new Image(nameImage,2,home1);
                list.add(image2);
                imageService.save(image2);
            }
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @PutMapping("/saveImg")
    public ResponseEntity<List<Image>> saveImg(MultipartFile[] files,Long idH) {
        List<Image> images = (List<Image>) imageService.findAllImgByIdHome(idH);
        for(int i = 0;i<files.length;i++){
            String fileName1 = files[i].getOriginalFilename();
            String nameImage = "avatar/" + fileName1;
            try {
                FileCopyUtils.copy(files[i].getBytes(),
                        new File("E:\\Case-Module4\\src\\main\\resources\\templates\\sheltek\\images\\avatar\\" + fileName1)); // coppy ảnh từ ảnh nhận được vào thư mục quy định,
                // đường dẫn ảo là /nhuanh/
            } catch (IOException ex) {
                ex.printStackTrace();
            }
            if(i == 0){
                if(!Objects.equals(fileName1, "")){
                    Image image = images.get(i);
                    image.setLinks(nameImage);
                    imageService.save(image);
                }
            } else {
                if(!Objects.equals(fileName1, "")){
                    Image image = images.get(i);
                    image.setLinks(nameImage);
                    imageService.save(image);
                }
            }
        }
        return new ResponseEntity<>(images,HttpStatus.OK);
    }
}
