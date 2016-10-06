# Ichronoclast

Stupid simple javascript library to display the current, live date and time

## Usage

```html
<div class="right-now">
  <span class="date-display"></span>
  <span class="time-display"></span>
</div>
```

```javascript
var clock = new Ichronoclast('.date-display', '.time-display');

clock.stop();  // Stop the automatic refresh
clock.start(); // Starts it back up!
```


## Settings

None... yet

## License

See [LICENSE](LICENSE)