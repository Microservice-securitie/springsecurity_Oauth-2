package emsi.app.inventoryservice;

import emsi.app.inventoryservice.entity.Product;
import emsi.app.inventoryservice.repository.ProductRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(ProductRepo productRepo){
        return args -> {
            productRepo.save(Product.builder()
                            .id(UUID.randomUUID().toString())
                            .name("Keyboard")
                            .quantity(12)
                            .price(234)
                            .build());
            productRepo.save(Product.builder()
                            .id(UUID.randomUUID().toString())
                            .name("mouse")
                            .quantity(5678)
                            .price(67890)
                            .build());
        };
    }
}
