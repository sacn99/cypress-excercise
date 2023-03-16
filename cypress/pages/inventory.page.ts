class InventoryPage{
    private title: string;
    private cart: string;
    private badge: string;
    private product1AddButton: string;
    private product2AddButton: string;
    private product1RemoveButton: string;
    private product2RemoveButton: string;
    

    constructor(){
        this.title = ".title";
        this.cart = ".shopping_cart_link";
        this.badge = ".shopping_cart_badge";
        this.product1AddButton = "#add-to-cart-sauce-labs-onesie";
        this.product2AddButton = "#add-to-cart-sauce-labs-backpack";
        this.product1RemoveButton = "#remove-sauce-labs-onesie";
        this.product2RemoveButton = "#remove-sauce-labs-backpack";
    }
    public getTitle(){
        return cy.get(this.title);
    }
    public getCartBadge(){
        return cy.get(this.badge);
    }
    public addToCartProduct1(){
        cy.get(this.product1AddButton).click();
    }
    public addToCartProduct2(){
        cy.get(this.product2AddButton).click();
    }
    public getCart(){
        cy.get(this.cart).click();
    }
    public removeFromCartProduct1(){
        return cy.get(this.product1RemoveButton);
    }
    public removeFromCartProduct2(){
        return cy.get(this.product2RemoveButton);
    }
}

export {InventoryPage}