var app = angular.module('myApp', []);
app.controller('foodpornController', function($scope){
    $scope.foodpornList = [
    {name: "Pizza", type: "Fast Food"},
    {name: "Kebab", type: "Fast Food"},
    {name: "Apple", type: "Fruit"},
    {name: "Pear", type: "Fruit"},
    {name: "Chocolate Bar", type: "Candy"},
    {name: "Pepsi", type: "Soda"},
    {name: "Coke", type: "Soda"},
    {name: "Fanta", type: "Soda"},
    {name: "Hamburger", type: "Fast Food"},
    {name: "Popcorn", type: "Snacks"},
    {name: "Mud Cakes", type: "Dessert"},
    {name: "Banana Pancakes", type: "Dessert"},
    {name: "Cheesecake", type: "Dessert"},
    {name: "Nutella", type: "Candy"},
    {name: "Chips", type: "Snacks"}
    ];
});
console.log("!");

