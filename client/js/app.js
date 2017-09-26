
Object.assign({}, state);

{ ...state }

// { name: <some value>, rank: <some value> }
onSaveFood(food) {
  this.props.saveFood(food);
}

this.componentState.foodName = 'Pizza';
this.componentState.foodRank = 1;

onSaveFood({
  name: this.componentState.foodName,
  rank: this.componentState.foodRank
});

const result = someValue || 2;

const result = state && <div></div>

class MyComp extends React.Component {



  render() {

    return React.createElement('div', null,(true) ? <EditRow /> : <ViewRow />)

    // return <div>
    //   (this.props.editRowId === car.id) ? <EditRow /> : <ViewRow />
    // </div>;



    return <div>
      (do { if (true) <EditRow /> else <ViewRow /> })
    </div>

    if (true) {
      return <div><EditRow /></div>;
    } else {
      return <div><ViewRow /></div>;
    }

  }

}


// const state = {
//   foods: [
//     { name: 'pizza', rank: 1 },
//     { name: 'chicken nuggets', rank: 2 }
//   ],
//   drinks: [
//     { name: 'water', rank: 1 },
//     { name: 'sode', rank: 2 },
//   ],
// };

// class FoodList extends React.Component {

//   render() {
//     this.props.foodList
//     this.props.drinksList
//   }

// }

// const mapStateToProps = ({ foods, drinks }) => ({
//   foodList: foods.map(({ name }) => name.toUpperCase()), drinksList: drinks
// });

// const props = mapStateToProps(state);




// const name = 'Bob';

// const propName = 'age';


// const p = {
//   _name: name,
//   displayName() {
//     console.log(this._name);
//   },
//   [ propName ]: 67,
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   }
// };

// console.log(p);
// p.displayName();



// const p = {
//   address: {
//     street: {
//       number: 1,
//       name: 'Oak Lane'
//     }
//     city: 
//   }
// }

// const { street, city } = p.address.street;

// street.

// function doIt2({ url }, ) {
//   url
// }

// const options = {
//   url: 'http://www.intuit.com',
// };

// doIt2(options)



// function doIt(a,b,c,...params) {
//   console.log(a,b,c, params);
// }

// doIt(...[1,2,3,4,5], 6);

// const nums = [1,2,3].concat(4);
// console.log(nums);

// const [ , ...items ]  = [ 1,2,3,4,5 ];

// const items = [1,2,3,4,5].slice(1);

// console.log(items);



// const p = { 
//   firstName: 'Bob',
//   lastName: 'Smith',
//   address: {
//     city: 'Parker',
//     state: 'CO',
//   }
// };

// const firstName = 'Sarah';
// //        const fn = firstName;   const { city } = address
// const { firstName: fn, lastName, address: { city : c } } = p;

// console.log(firstName, fn, lastName, c);


