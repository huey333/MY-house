<script setup lang="ts">
const products = [
  { id:1,
    image: 'src/assets/CratImage/Bottle1.png',
    name: 'Red Chili Ground',
    quantity: '2 Pieces',
    price: "12.99$",
    availability: 'In Stock',
    total: "12.99$"
  },
  {id:2,
    image: 'src/assets/CratImage/Bottle2.png',
    name: 'Black Pepper Shaker',
    quantity: '1 Piece',
    price: "9.99$",
    availability: 'In Stock',
    total: "9.99$"
  },
  {id:3,
    image: 'src/assets/CratImage/Bottle3.png',
    name: 'Cumin Ground',
    quantity: '3 Pieces',
    price: "13.99$",
    availability: 'Out of Stock',
    total: "13.99$"
  }
];
import { CloseBold} from '@element-plus/icons-vue'
import { Promotion, Avatar, Share, StarFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="mainContainer">
    <div class=" centerContainer">
      <table>
        <thead >
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Availability</th>
        <th>Total</th>
        <th>Actions</th>
        </thead>
        <tbody>
        <tr v-for="section in products" :key="section.id">
          <td><button class="buttonX" ><el-icon ><CloseBold /></el-icon></button></td>
          <td>
            <div class="imgAndName">
            <img :src="section.image" alt="product image" class="image">
            <div class="name">{{section.name}}
             <p> {{section.quantity}}</p>
            </div>
            </div>
          </td>
          <td class="price">{{section.price}}</td>
          <td class="availablebility">{{section.availability}}</td>
          <td class="price">{{section.total}}</td>
          <td><button class="button-add">Add To Cart</button></td>
        </tr>
        </tbody>
      </table>
      <div class="footText"> Share Your Wishlist</div>
      <div class="footIcon">

        <el-icon class="icon"><Promotion /></el-icon>
        <el-icon class="icon"><Avatar /></el-icon>
        <el-icon class="icon"><Share /></el-icon>
        <el-icon class="icon"><StarFilled /></el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainContainer{
  display: flex;

  justify-content: center;
  align-items: center;
  .centerContainer{
    display: flex;
    flex-wrap:wrap ;
    width: 100%;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
  }
}
table{
  margin: 20px 0;
  border-collapse: collapse; /* 合并单元格边框 */
  width: 100%; /* 表格宽度占满容器 */

  th{
    padding: 15px ;
    border: 1px solid #ddd; /* 边框样式 */
    font-weight: bold;
    color: black;
    font-size: 18px;
  }
  p{

    font-size: 15px;
    color: #999999;
  }
  tr{
  td{
    padding: 15px 10px;
    border: 1px solid #ddd; /* 边框样式 */
  }
    overflow: hidden;
  }
  .buttonX{
    width: 100%;
    color: red;
    font-size: 30px;
    border: none;
    background:none ;

  }
  .imgAndName{
    display: flex;
    align-items: center;
    .image{
      width :50px;
      height: 50px;
    }
    .name{
      font-weight: bold;
      color: black;
      font-size: 16px;
    }

  }



  .price{
    color: #686a6f;
    font-weight: bold;
    font-size: 16px;
  }
  .availablebility{
    color: green;
    font-weight: bold;
    font-size: 16px;
  }
}
.footText{
  width:100%;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.footIcon{
  display: flex;
  gap: 25px;
  margin-top: 20px;
}
.icon{
  width: 30px;
  height: 30px;
  background: rgba(200,200,200,0.15);
  font-size: 20px;
  border-radius: 50%;
}
.icon:hover{
  cursor:pointer;
  background: #ff9900;
  color: white;
  transition: 0.3s ;
}
.button-add{
  position: relative;
  overflow: hidden;
    color: white;
  background: #ff9900;
  border: none;
  border-radius: 50PX;
  width: 130px;
  height: 50px;
}
.button-add::after{
content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: rgba(0, 0, 0, 0.15); /* 半透明黑色遮罩 */;
  transition: 0.2s ease-out;
  z-index: 1;
}
.button-add:hover::after{
height: 100%;
}
.button-add:hover{
  cursor: pointer;
}

</style>
