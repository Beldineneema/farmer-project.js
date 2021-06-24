 class Mkulima{
     constructor(){
         this.farm=[];
         this.product=[];
         this.orders=[];

     }
 addfarm(farmId,farm, phoneNumber,address) {
     var farm={ 
         farmId:farmId,
         name:name,
         farmer:farmer,
         phoneNumber:phoneNumber,
         address:address,
     }
     this.farm.push(farm);
     return this.farm
     
    }
    removeFarm(farmId){
        let farm= this.getfarm(farmId);
        let index=this.farm.indexOf(farm);
        this.farm.splice(index,1);
        return this.farm

    }

    updateFarm(farmId,name, farmer,phoneNumber,farm){
        var farm={ 
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,
        }
        this.farm.push(farm);
        return this.farm;
    
    }
    getfarm(farmId){
        for(var i=0;i<this.farm.length;++){
            let farm=this.farm[i];
            if (this.farm.farmId===farmId){
                return farm;
            }
    }

    }

    addProduct(addProductId,name,price){
        var product = {
        ProductId:ProductId,
        name:name,
        price:price,
        }
        this.product.push(product);
        return this.product;
    }
    removeProduct(ProductId){
        let product =this.getProduct(ProductId);
        let index=this.product.indexOf(product);
        this.product.sprice(index,1);
        return this.product;

    }
    updateProduct(ProductId,name,price){
        var product={
            ProductId: ProductId,
            name:name,
            price:price,
        
        }
        this.product.push(product);
    }
    getProduct(ProductId){
        for (var i=0; i<this.product.length;i++){
            let product=this.product[i];
            if( this.product.ProductId===product){
            }
            return this.product;
        }
    }
    printProduct(){
        let product=this.getProduct;
        return`${product} cost ${price}`;

    }
    calculateOrderCost(productId,quantity){
        var cost=quantity*3000;
        return `$ {productId} costs ${cost}`

    }
    let mkulima = newMkulima();
    mkulima.addfarm(3847,"Beldine.ltd",074323252);

  console.log(mshamba.addfarm, 397362,"mkulima", "Solio",0734434123," P.O BOX Kericho");
   console.log(mshamba.removeFarm, "Dk83900");
   console.log(mshamba.updateFarm, "DK9309","Ketepe",073212342,Kay );
   console.log(mshamba.calculateOrderCost, 5000);
   console.log(mshamba.printProduct,"Rice",3734);
   console.log(mshamba.updateProduct, "ma793","maize", 2400)
