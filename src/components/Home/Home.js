import image from 'next/image'
import React, { useState } from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import { userState } from 'react'


export default function Home() {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['mozarella cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
            price: 9.99
        },
        {
            id: '2',
            name: 'Meat feast',
            slug: 'meat-feast',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['ham', 'pepperoni', 'bacon', 'sausage'],
            image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
            price: 15.99
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['olives', 'pineapple', 'ham', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            price: 12.99
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['mozarella cheese', 'peperoni'],
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
            price: 14.99
        },
        {
            id: '5',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['tomato', 'sausage', 'olives'],
            image: 'https://images.unsplash.com/photo-1559978137-8c560d91e9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80',
            price: 9.99
        },
        {
            id: '6',
            name: 'Cheese & Egg & Sausage Pizza',
            slug: 'cheese-and-egg-sausage-pizza',
            description: 'lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh lmao dark dark bruh bruh',
            toppings: ['mozarella cheese', 'egg', 'sausage'],
            image: 'https://images.unsplash.com/photo-1544882907-b914cebddbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
            price: 13.99
        }
    ]

    const [keyword, setKeyword] = useState('');

    const filteredPizza = pizzas.filter(
        pizza =>
            pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }


    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings...." className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizza < 1 ?
                    (
                        <div className={styles.nopeContainer}>There is no pizza or pizza toppings with that. </div>
                    )
                    :
                    (
                        filteredPizza.map(pizza => {
                            return (
                                <div className={styles.pizzaItem} key={pizza.id}>
                                    <Link href={`/${pizza.slug}`}>
                                        <a className={styles.pizzaImageBox}>
                                            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                                        </a>
                                    </Link>
                                    <div className={styles.pizzaText}>
                                        <p className={styles.pizzaHeader}>{pizza.name}</p>
                                        <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                        <p className={styles.pizzaPrice}>${pizza.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    )}
            </div>
        </div>
    )
}
