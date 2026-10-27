//TASK 1 
const languages = ["JavaScript", "Python", "Java", "C#", "Go", "PHP", "Ruby", "TypeScript"];

console.log(languages[0]);                  
console.log(languages[languages.length - 1]);     
console.log(languages[3]);            
console.log(languages.length);     
languages[1] = "Python 3";                      
languages.push("Rust");                         
languages.splice(5, 1);                          
console.log(languages);
console.log(languages[99]);                    

//TASK 2 
const scores = [78, 92, 65, 88, 54, 71, 96, 83];

// Reusable function: works with ANY array, and the pass mark can change.
function analyzeScores(scores, passMark = 60) {
  if (!Array.isArray(scores) || scores.length === 0) return null; 

  const total = scores.reduce((sum, s) => sum + s, 0);
  const passed = scores.filter((s) => s >= passMark).length;

  return {
    total,
    average: total / scores.length,
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    passed,
    failed: scores.length - passed,
  };
}

// TASK 3
const cart = [
  { name: "Laptop", price: 450000, quantity: 1 },
  { name: "Mouse", price: 8000, quantity: 2 },
  { name: "Keyboard", price: 25000, quantity: 1 },
  { name: "Monitor", price: 120000, quantity: 2 },
  { name: "Headphones", price: 30000, quantity: 3 },
];

const productCount = cart.length;
const simpleTotal = cart.reduce((sum, p) => sum + p.price, 0);              // ignores quantity
const actualTotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0); // challenge
const mostExpensive = cart.reduce((max, p) => (p.price > max.price ? p : max));
const cheapest = cart.reduce((min, p) => (p.price < min.price ? p : min));
console.log({ productCount, simpleTotal, actualTotal, mostExpensive, cheapest });

// TASK 4 
const users = [
  { name: "Ada", email: "ada@mail.com", role: "admin" },
  { name: "Bola", email: "bola@mail.com", role: "editor" },
  { name: "Chidi", email: "chidi@mail.com", role: "admin" },
  { name: "Dayo", email: "dayo@mail.com", role: "viewer" },
];


function findUserByEmail(email) {
  return users.find((u) => u.email === email) ?? null;
}

function findUsersByRole(role) {
  return users.filter((u) => u.role === role);
}

function userExists(email) {
  return users.some((u) => u.email === email);
}
const findAdmins = () => findUsersByRole("admin");

console.log(findUserByEmail("ada@mail.com"));  
console.log(findUserByEmail("nobody@x.com"));  
console.log(findAdmins());
console.log(userExists("dayo@mail.com"));      
console.log(findUsersByRole("ghost"));       

// TASK 5 
const prices = [1000, 2500, 5000, 7500, 10000];

const discounted = prices.map((p) => p * 0.9);       
const above5000 = prices.filter((p) => p > 5000);    
const below5000 = prices.filter((p) => p < 5000);    
const sorted = [...prices].sort((a, b) => a - b);    
console.log({ discounted, above5000, below5000, sorted });

// ENGINEERING CHALLENGE (Task 2, twice) 

let total = 0, high = scores[0], low = scores[0], pass = 0;
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
  if (scores[i] > high) high = scores[i];
  if (scores[i] < low) low = scores[i];
  if (scores[i] >= 60) pass++;
}
console.log(total, total / scores.length, high, low, pass, scores.length - pass);

