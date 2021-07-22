import React from 'react'
import styles from '../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Pizza({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaContainer}>
                <div className={styles.pizzaWrapperLeft}>
                    <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                </div>
                <div className={styles.pizzaWrapperRight}>
                    <div className={styles.pizzaInfo}>
                        <p className={styles.pizzaTitle}>{pizza.name}</p>
                        <p className={styles.pizzaDescription}>{pizza.description}</p>
                        <p className={styles.pizzaPrice}>€{pizza.price}</p>
                        <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                    </div>
                    <div className={styles.otherPizzasWrapper}>
                        {otherPizzas.map(otherpizza => {
                            return(
                                <div className={styles.otherPizzas} key={otherpizza.id}>
                                    <Link href={"/" + otherpizza.slug}><a>
                                    <img src={otherpizza.image} alt={otherpizza.name} />
                                    <p>{otherpizza.name}</p>
                                    </a></Link>
                                </div>  
                            )
                        })}
                    </div>
                </div>
            </div>
            <footer className={styles.footer}><a rel="follow" target="_blank" href="https://www.facebook.com">Made by dathaynha.</a></footer>
        </div>
    )
}


export const getStaticPaths = async () => {
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
    const paths = pizzas.map(pizza => ({
        params: { slug: `${pizza.slug}` }
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
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
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random).slice(0, 3),
        }
    }
}