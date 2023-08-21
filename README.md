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
           - [Themes Demo](#themes-demo)

# Github Blog Card
Paste this into your markdown content.

Change the `?username=` and `&blogname=` value to your GitHub username and blogname from options `medium` , `dev` and `hashnode`.

```md
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
```
## Demo

<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>

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
<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>
```

That Card that rendered

<img src="https://github-blog-cards.vercel.app/blog?username=vishalqw78&blogname=medium"/>

#### Hashnode Example

```md
<img src="https://github-blog-cards.vercel.app/blog?username=nevodavid10&blogname=hashnode"/>
```

That Card that rendered

<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode"/>

#### Dev Example

```md
<img src="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev"/>
```

That Card that rendered

<img src="https://github-blog-cards.vercel.app/blog?username=corpcubite&blogname=dev"/>

### Index

The Index Parameter is used to fetch the n<sup>th</sup> from last Blog.

#### Example 

This will result in fetching the 2<sup>nd</sup> and 3<sup>rd</sup> last Blog from Hashnode of user profile.
>[!NOTE]
> If the index is not available or greater than 10 it will result in fetching the Most Recent Blog.

```md
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2"/>

<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3"/>
```
<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=2"/>

<img src="https://github-blog-cards.vercel.app/blog?username=https://lo-victoria.com/&blogname=hashnode&index=3"/>


### Themes

You can use the ```?theme=``` to change between the different theme.

#### Themes Demo

<div>
<img src="https://github-blog-cards.vercel.app/blog?theme=radical&username=https://lo-victoria.com/&blogname=hashnode&index=2"/>
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
