package emsi.app.inventoryservice.repository;

import emsi.app.inventoryservice.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,String> {
}
