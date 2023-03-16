import { LoginPage, InventoryPage } from "../pages";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("Verify product selection for SauceDemo", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });

    it("Sauce Labs Backpack and Onesie would be added to the shopping cart", () => {
      cy.visit("https://www.saucedemo.com/");
      
      loginPage.login("standard_user","secret_sauce");

      // Assertion that verifies that product list is displayed
       inventoryPage.getTitle().should("have.text", "Products");

       inventoryPage.addToCartProduct1();
       inventoryPage.addToCartProduct2();      

      //Assertion that confirme the products previously added are listed
      inventoryPage.removeFromCartProduct1().should("be.visible");
      inventoryPage.removeFromCartProduct2().should("be.visible");
      inventoryPage.getCartBadge().should("have.text",2);
      inventoryPage.getCart();

      //Assertion that checks if the correct products have been clicked
      cy.get('.inventory_item_name').should("contain","Sauce Labs Onesie");
      cy.get('.inventory_item_name').should("contain","Sauce Labs Backpack");
      cy.get('.inventory_item_name').should("have.length",2);
    })
  });