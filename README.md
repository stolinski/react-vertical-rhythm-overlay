# React Vertical Rhythm Overlay

## Install
    npm install --save react-vertical-rhythm-overlay

## Usage

Specify a fontSize & lineHeight to have a vertical rhythm grid displayed. This component is positioned absolutely, so place it somewhere relative to the document.

```
import VerticalRhythm from 'react-vertical-rhythm-overlay';
...
...
    render() {
        return (
            <div>
                <VerticalRhythm fontSize="1.2rem" lineHeight="1.5"/>
                {/* yada yada yada */}
            </div>
        );
    }
...
```


## Props

### fontSize
Should be any type of font unit with unit declared. (1.2em, 1.2rem, 16px... and so on).

### lineHeight
Should be any unitless, relative measure of line height. (1, 1.5, 1.234234234234... and so on).


### Sponsored By

[Level Up Tuts](http://leveluptutorials.com/) - [Youtube Channel](https://www.youtube.com/user/LevelUpTuts/)

![Example Screenshot](/img/screen.png)
