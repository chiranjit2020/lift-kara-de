# Lift-Kara-De Js
###### Lift Kara De is a Hindi Language Sentense which means 'Lift me a little higher'. 
###### It is a small vanilla javascript library for creating Back To Top Button on webpage.

### HTML
```html
<!-- No HTML Tag needed because it is completely dynamic. -->
```

### CSS
```css
/*It is NOT necessary if you don't need our style.
You can create your own style*/
button#toTop{
    font-size: 1.6rem;
    color: #fff;
    cursor: pointer;
    height: 7rem;
    width: 7rem;
    background-color: #f09;
    background-image: linear-gradient(45deg, #3023AE 0%, #f09 100%);
    border: none;
    border-radius: 50% 50% 47% 53% / 77% 77% 23% 23%;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.4);
    transition: all .5s ease; 
}
button#toTop:hover,
button#toTop:focus{
    border: none;
    outline: none;
    background-image: linear-gradient(45deg, #f09 0%, #3023AE 100%);
    box-shadow:  0 0 1rem 0 rgba(0,0,0,.4);
}
```
### JAVSCRIPT
```
// Lift-Kara-De JS . Download and attach it in your webpage.
<script src="lift-kara-de.js"></script>

// Call The fucntion
<script>
    // LKD(HTML Tag, Inner Text, ID, VALUE)
	LKD('button','TOP', 'id', 'toTop');
</script>
```
