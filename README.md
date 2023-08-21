<p align="center">
  
<img src="https://res.cloudinary.com/dnyfz9zqn/image/upload/v1692555001/logoed_1_b07o9w.svg"/>

#
<p align="center">Get Dynamic Blog Card on your READMEs!</p>
</p>

# Introduction

Github Blog Cards enables automatic rendering of dynamic blog cards, showcasing from your 10 latest articles from platforms like [Medium](https://medium.com/), [Dev](https://dev.to/), [Hashnode](https://hashnode.com/). Elevate your profile, save time, and engage readers directly on your GitHub readme.

By integrating this feature, your profile gains visual appeal and keeps visitors informed about your latest writings.

<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>

# Usage and Features

- [Github Blog Card](#github-blog-card)
    - [Demo](#demo)
    - [Usage](#usage)
        - [Username and Blogname](#username-and-blogname)
        - [Available Blog Sites Examples](#available-blog-sites-examples)
           - [Medium Example](#medium-example)
           - [Hashnode Example](#hashnode-example)
           - [Dev Example](#dev-example)
        - [Index](#index)
        - [Themes](#themes)
           - [Available Themes](#available-themes)
           - [Themes Demo](#themes-demo)

# Github Blog Card
Paste this into your markdown content.

Change the `?username=` and `&blogname=` value to your GitHub username and blogname from options `medium` , `dev` and `hashnode`.

```md
<a href="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium">
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
</a>
```
## Demo

<a href="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium">
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
</a>

## Usage
How to use the Github Blog Cards
### Parameter
There are 4 Different Parameter that can be used 
### Username and Blogname
The Paramter ```username``` and ```blogname``` are used with each other at a same time.
> [!NOTE]
> The Default Value of username is Vishalqw78 (Project Owner's Username) and blogname is medium.

>[!WARNING]
>Provide the correct value of Username and blogname otherwise it will result in error

Change the following the render the cards.

### Available Blog Sites Examples
There are Three Available Blog Site to fetch and display the Blog Post Cards.
[Medium](https://medium.com/)
[Dev](https://dev.to/)
[Hashnode](https://hashnode.com/)

#### Medium Example

```md
<a href="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium">
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
</a>
```

That Card that rendered

<a href="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium">
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
</a>

#### Hashnode Example

```md
<a href="https://github-blog-cards.vercel.app/blog?username=nevodavid10&blogname=hashnode">
<img src="https://github-blog-cards.vercel.app/blog?username=nevodavid10&blogname=hashnode"/>
</a>
```

That Card that rendered

<a href="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode">
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode"/>
</a>

#### Dev Example

```md
<a href="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev">
<img src="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev"/>
</a>
```

That Card that rendered

<a href="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev">
<img src="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev"/>
</a>

### Index

The Index Parameter is used to fetch the n<sup>th</sup> from last Blog.

#### Example 

This will result in fetching the 2<sup>nd</sup> and 3<sup>rd</sup> last Blog from Hashnode of user profile.
>[!NOTE]
> If the index is not available or greater than 10 it will result in fetching the Most Recent Blog.

```md
<a href="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2">
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
</a>
<a href="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3">
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3"/>
</a>
```
<a href="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2">
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
</a>
<a href="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3">
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3"/>
</a>


### Themes

You can use the ```?theme=``` to change between the different theme.

## Available Themes
<a name="#available-themes"></a>
<details>
<summary>:eyes: Available Themes</summary>
<div>
    <h2>default</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=default&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="default blog card">
    
  </div>


  <div>
    <h2>default_repocard</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=default_repocard&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="default_repocard blog card">
    
  </div>


  <div>
    <h2>transparent</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=transparent&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="transparent blog card">
    
  </div>


  <div>
    <h2>shadow_red</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=shadow_red&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="shadow_red blog card">
    
  </div>


  <div>
    <h2>shadow_green</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=shadow_green&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="shadow_green blog card">
    
  </div>


  <div>
    <h2>shadow_blue</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=shadow_blue&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="shadow_blue blog card">
    
  </div>


  <div>
    <h2>dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=dark&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="dark blog card">
    
  </div>


  <div>
    <h2>radical</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=radical&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="radical blog card">
    
  </div>


  <div>
    <h2>merko</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=merko&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="merko blog card">
    
  </div>


  <div>
    <h2>gruvbox</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=gruvbox&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="gruvbox blog card">
    
  </div>


  <div>
    <h2>gruvbox_light</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=gruvbox_light&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="gruvbox_light blog card">
    
  </div>


  <div>
    <h2>tokyonight</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=tokyonight&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="tokyonight blog card">
    
  </div>


  <div>
    <h2>onedark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=onedark&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="onedark blog card">
    
  </div>


  <div>
    <h2>cobalt</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=cobalt&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="cobalt blog card">
    
  </div>


  <div>
    <h2>synthwave</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=synthwave&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="synthwave blog card">
    
  </div>


  <div>
    <h2>highcontrast</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=highcontrast&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="highcontrast blog card">
    
  </div>


  <div>
    <h2>dracula</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=dracula&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="dracula blog card">
    
  </div>


  <div>
    <h2>prussian</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=prussian&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="prussian blog card">
    
  </div>


  <div>
    <h2>monokai</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=monokai&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="monokai blog card">
    
  </div>


  <div>
    <h2>vue</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=vue&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="vue blog card">
    
  </div>


  <div>
    <h2>vue-dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=vue-dark&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="vue-dark blog card">
    
  </div>


  <div>
    <h2>shades-of-purple</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=shades-of-purple&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="shades-of-purple blog card">
    
  </div>


  <div>
    <h2>nightowl</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=nightowl&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="nightowl blog card">
    
  </div>


  <div>
    <h2>buefy</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=buefy&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="buefy blog card">
    
  </div>


  <div>
    <h2>blue-green</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=blue-green&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="blue-green blog card">
    
  </div>


  <div>
    <h2>algolia</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=algolia&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="algolia blog card">
    
  </div>


  <div>
    <h2>great-gatsby</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=great-gatsby&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="great-gatsby blog card">
    
  </div>


  <div>
    <h2>darcula</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=darcula&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="darcula blog card">
    
  </div>


  <div>
    <h2>bear</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=bear&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="bear blog card">
    
  </div>


  <div>
    <h2>solarized-dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=solarized-dark&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="solarized-dark blog card">
    
  </div>


  <div>
    <h2>solarized-light</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=solarized-light&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="solarized-light blog card">
    
  </div>


  <div>
    <h2>chartreuse-dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=chartreuse-dark&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="chartreuse-dark blog card">
    
  </div>


  <div>
    <h2>nord</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=nord&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="nord blog card">
    
  </div>


  <div>
    <h2>gotham</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=gotham&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="gotham blog card">
    
  </div>


  <div>
    <h2>material-palenight</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=material-palenight&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="material-palenight blog card">
    
  </div>


  <div>
    <h2>graywhite</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=graywhite&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="graywhite blog card">
    
  </div>


  <div>
    <h2>vision-friendly-dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=vision-friendly-dark&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="vision-friendly-dark blog card">
    
  </div>


  <div>
    <h2>ayu-mirage</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=ayu-mirage&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="ayu-mirage blog card">
    
  </div>


  <div>
    <h2>midnight-purple</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=midnight-purple&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="midnight-purple blog card">
    
  </div>


  <div>
    <h2>calm</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=calm&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="calm blog card">
    
  </div>


  <div>
    <h2>flag-india</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=flag-india&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="flag-india blog card">
    
  </div>


  <div>
    <h2>omni</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=omni&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="omni blog card">
    
  </div>


  <div>
    <h2>react</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=react&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="react blog card">
    
  </div>


  <div>
    <h2>jolly</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=jolly&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="jolly blog card">
    
  </div>


  <div>
    <h2>maroongold</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=maroongold&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="maroongold blog card">
    
  </div>


  <div>
    <h2>yeblu</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=yeblu&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="yeblu blog card">
    
  </div>


  <div>
    <h2>blueberry</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=blueberry&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="blueberry blog card">
    
  </div>


  <div>
    <h2>slateorange</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=slateorange&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="slateorange blog card">
    
  </div>


  <div>
    <h2>kacho_ga</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=kacho_ga&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="kacho_ga blog card">
    
  </div>


  <div>
    <h2>outrun</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=outrun&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="outrun blog card">
    
  </div>


  <div>
    <h2>ocean_dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=ocean_dark&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="ocean_dark blog card">
    
  </div>


  <div>
    <h2>city_lights</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=city_lights&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="city_lights blog card">
    
  </div>


  <div>
    <h2>github_dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=github_dark&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="github_dark blog card">
    
  </div>


  <div>
    <h2>github_dark_dimmed</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=github_dark_dimmed&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="github_dark_dimmed blog card">
    
  </div>


  <div>
    <h2>discord_old_blurple</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=discord_old_blurple&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="discord_old_blurple blog card">
    
  </div>


  <div>
    <h2>aura_dark</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=aura_dark&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="aura_dark blog card">
    
  </div>


  <div>
    <h2>panda</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=panda&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="panda blog card">
    
  </div>


  <div>
    <h2>noctis_minimus</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=noctis_minimus&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="noctis_minimus blog card">
    
  </div>


  <div>
    <h2>cobalt2</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=cobalt2&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="cobalt2 blog card">
    
  </div>


  <div>
    <h2>swift</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=swift&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="swift blog card">
    
  </div>


  <div>
    <h2>aura</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=aura&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="aura blog card">
    
  </div>


  <div>
    <h2>apprentice</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=apprentice&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="apprentice blog card">
    
  </div>


  <div>
    <h2>moltack</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=moltack&username=https://lo-victoria.com/&blogname=hashnode&index=3" alt="moltack blog card">
    
  </div>


  <div>
    <h2>codeSTACKr</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=codeSTACKr&username=https://lo-victoria.com/&blogname=hashnode&index=4" alt="codeSTACKr blog card">
    
  </div>


  <div>
    <h2>rose_pine</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=rose_pine&username=https://lo-victoria.com/&blogname=hashnode&index=5" alt="rose_pine blog card">
    
  </div>


  <div>
    <h2>date_night</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=date_night&username=https://lo-victoria.com/&blogname=hashnode&index=6" alt="date_night blog card">
    
  </div>


  <div>
    <h2>one_dark_pro</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=one_dark_pro&username=https://lo-victoria.com/&blogname=hashnode&index=7" alt="one_dark_pro blog card">
    
  </div>


  <div>
    <h2>rose</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=rose&username=https://lo-victoria.com/&blogname=hashnode&index=8" alt="rose blog card">
    
  </div>


  <div>
    <h2>holi</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=holi&username=https://lo-victoria.com/&blogname=hashnode&index=9" alt="holi blog card">
    
  </div>


  <div>
    <h2>neon</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=neon&username=https://lo-victoria.com/&blogname=hashnode&index=10" alt="neon blog card">
    
  </div>


  <div>
    <h2>blue_navy</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=blue_navy&username=https://lo-victoria.com/&blogname=hashnode&index=1" alt="blue_navy blog card">
    
  </div>


  <div>
    <h2>calm_pink</h2>
    <img src="https://github-blog-cards.vercel.app/blog?theme=calm_pink&username=https://lo-victoria.com/&blogname=hashnode&index=2" alt="calm_pink blog card">
    
  </div>
</details>

#### Themes Demo

<div>
<img src="https://github-blog-cards.vercel.app/blog?theme=rose&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=github&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=dark&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=neon&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=cobalt&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=tokyonight&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=synthwave&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=dracula&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=panda&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=highcontrast&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=github_dark&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
<img src="https://github-blog-cards.vercel.app/blog?theme=slateorange&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
</div>



<details>
<summary>:eyes: The RSS Feed Of Available Blogs</summary>

<table>
  <tr>
    <th>Site</th>
    <th>RSS Feed</th>
  </tr>
  <tr>
    <td>Medium</td>
    <td><a href="https://medium.com/feed/@your-username">https://medium.com/feed/@your-username</a></td>
  </tr>
  <tr>
    <td>Dev.to</td>
    <td><a href="https://dev.to/feed/@username">https://dev.to/feed/your-username</a></td>
  </tr>
  <tr>
    <td>Hashnode</td>
    <td><a href="blogname/rss.xml">https://blogname/rss.xml</a></td>
  </tr>
</table>

</details>
