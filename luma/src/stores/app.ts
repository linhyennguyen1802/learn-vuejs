import { reactive } from "vue";

export const appStore = reactive({ count: 0 })

export const totalInBag = reactive({ count: 0 })

export const lumaProducts = [
    { productID: 15654, productName: "Giraffa", productPrice: 99.99, productImage: ["/giraffa/giraffa_01.jpeg", "/giraffa/giraffa_02.jpeg", "/giraffa/giraffa_03.jpeg", "public/giraffa/giraffa_04.jpeg"] },
    { productID: 15510, productName: "Solis", productPrice: 79.99, productImage: ["/solis/solis_01.jpeg"] },
    { productID: 13652, productName: "Corner Office", productPrice: 190.00, productImage: ["/corner/corner_01.jpeg"] },
    { productID: 17846, productName: "Cielo", productPrice: 89.99, productImage: ["/cielo/cielo_01.jpeg"] },
    { productID: 18412, productName: "Uma Mini", productPrice: 155.99, productImage: ["/uma/uma_01.jpg"] },
    { productID: 17623, productName: "Countour", productPrice: 245.99, productImage: ["/countour/countour_01.jpg"] },
    { productID: 12548, productName: "Circa", productPrice: 398.99, productImage: ["/circa/circa_01.jpg"] },
    { productID: 14395, productName: "Bola Sphere", productPrice: 789.99, productImage: ["/sphere/sphere_01.jpg"] },
    { productID: 19812, productName: "Bola Disc", productPrice: 1125.99, productImage: ["/disc/disc_01.jpg"] },
    { productID: 18754, productName: "Belmont", productPrice: 717.99, productImage: ["/belmont/belmont_01.jpg"] },
    { productID: 16458, productName: "Bel Occhio", productPrice: 519.99, productImage: ["/occhio/occhio_01.jpg"] },
    { productID: 13985, productName: "Bola Halo", productPrice: 159.99, productImage: ["/halo/halo_01.jpg"] },
]

