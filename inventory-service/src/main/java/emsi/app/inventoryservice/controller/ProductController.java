package emsi.app.inventoryservice.controller;

import emsi.app.inventoryservice.entity.Product;
import emsi.app.inventoryservice.repository.ProductRepo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    private ProductRepo productRepo;

    public ProductController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @GetMapping("/products")
    public List<Product> products(){
        return productRepo.findAll();
    }
}
