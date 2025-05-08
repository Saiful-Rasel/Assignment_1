
function formatString(input: string, toUpper?: boolean): string {
     if (typeof input === 'string' && toUpper == true) {
        const result = input.toUpperCase()
        return result
    } else if (typeof input === 'string' && toUpper == false) {
        return input.toLowerCase()
    } else {
        return input
    }
}

// console.log(formatString('rello'))



type Books = { title: string; rating: number }[]
const books: Books = [
    { title: 'bookA', rating: 4 },
    { title: 'bookB', rating: 3 },
    { title: 'bookB', rating: 3.9 },
    { title: 'bookC', rating: 5.0 },
    { title: 'bookD', rating: 7.0 },
    { title: 'bookE', rating: 9.0 },
]
function filterByRating(items: Books) : Books {
    const highestRating = items.filter(item => item.rating >=4)
  return highestRating

}

// console.log(filterByRating(books))



function concatenateArrays<T>(...arrays: T[][]): T[] {
   const result = arrays.flat()
   return result
   }

// console.log(concatenateArrays<string>(['sa', '43'], ['1']))
// console.log(concatenateArrays<number>([2,3,4],[5]))



class Vehicle {
   private make:string;
   private year:number
    constructor(make:string,year:number){
        this.make = make;
        this.year = year
    }
    getInfo(){
        return `make:${this.make} and year:${this.year}`
    }
}

class Car extends Vehicle {
    private model:string;
    constructor(make:string, year:number,model:string){
        super(make,year)
        this.model = model
    }
    getModel(){
        return `Modle:${this.model}`
    }
}

const myCar = new Car('toyoto', 2020,'corolla')
// console.log(myCar.getInfo())
// console.log(myCar.getModel())



function processValue(value:string | number) : string | number{
    if(typeof value === 'number'){
        return value *2
    }else{
        return value.length
    }
}
// console.log(processValue('saiful'))




interface Product {
    name:string;
    price:number;
}

function getMostExpensiveProduct(products:Product[] | null)  {
    // console.log(products)
    if( products?.length === 0){
        return null
    }
    const highestPrice = products?.reduce((current,previous) => {
        return current.price > previous.price ? current : previous
    })
   return highestPrice
}

const products:Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
//   console.log(getMostExpensiveProduct(products))



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  function getDayType(day: Day) :string {
        if(day == Day.Saturday || day == Day.Sunday){
            return ` weekend`
        }else{
            return `weekday`
        }
  }

//   console.log(getDayType(Day.Friday))



async function squareAsync(n: number): Promise<number> {
   
        if (n < 0) {
            Promise.reject(new Error('negetive number'))
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    

}
// squareAsync(3).then(console.log)
