# Projet 1 : Réduction de la durée moyenne des films
![](/Netflix_Data/images/netflix.jpg)


Netflix ! Ce qui a commencé en 1997 comme un service de location de DVD a depuis explosé et est devenu la plus grande entreprise de divertissement/médias en termes de capitalisation boursière, avec plus de 200 millions d'abonnés en janvier 2021.

Étant donné le grand nombre de films et de séries disponibles sur la plateforme, c'est l'occasion idéale de nous plonger dans l'industrie du divertissement. Comment a évolué la durée moyenne des films cinématographiques? ?

## Import du Dataset, création d'un DataFrame et visulisation des données

```python
# Create the years and durations lists
years = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
durations = [103, 101, 99, 100, 100, 95, 95, 96, 93, 90]

# Create a dictionary with the two lists
movie_dict = {"years":years,"durations":durations}

# Print the dictionary
print(movie_dict)
```
![](/Netflix_Data/images/movie_dict.png)
### Import de pandas et création d'un DataFrame à partir du dictionnaire "movie_dict"
```python
# Import pandas under its usual alias
import pandas as pd

# Create a DataFrame from the dictionary
durations_df = pd.DataFrame(movie_dict)

# Print the DataFrame
print(durations_df)
```
### Import de matplotlib.pyplot et création d'un plot à partir des années et de la durée des films
![](/Netflix_Data/images/duration_df.png)
```python
# Import matplotlib.pyplot under its usual alias and create a figure
import matplotlib.pyplot as plt
fig = plt.figure()

# Draw a line plot of release_years and durations
plt.plot(durations_df["years"], durations_df["durations"])

# Create a title
plt.title("Netflix Movie Durations 2011-2020")

# Show the plot
plt.show()
```

![](/Netflix_Data/images/80048f50-3b37-4096-988c-b582e37ff07c.png)

Ici, nous pouvons voir que la durée des moyennes des films entre 2011 et 2020 est en forte baisse(102.5 minutes en moyenne pour 2011, et 90 minutes en moyenne pour 2020)


## Import du reste des data via CSV
```python
# Read in the CSV as a DataFrame
netflix_df = pd.read_csv("datasets/netflix_data.csv")

# Print the first five rows of the DataFrame
print(netflix_df[0:5])
```
![](/Netflix_Data/images/print_netflix_05.png)

## Filtrage des données en fonction de leur catégorie
```python
# Subset the DataFrame for type "Movie"
netflix_df_movies_only = netflix_df[netflix_df["type"]=="Movie"]

# Select only the columns of interest
netflix_movies_col_subset = netflix_df_movies_only[["title","country","genre","release_year","duration"]]

# Print the first five rows of the new DataFrame
print(netflix_movies_col_subset[0:5])
```
![](/Netflix_Data/images/print_netflix_movies.png)

## Création d'un scatter plot de la durée des films en fonction des années
```python
# Create a figure and increase the figure size
fig = plt.figure(figsize=(12,8))

# Create a scatter plot of duration versus year
plt.scatter(netflix_movies_col_subset['release_year'],netflix_movies_col_subset['duration'])

# Create a title
plt.title('Movie Duration by Year of Release')
plt.xlabel('Release year')
plt.ylabel("Duration(min)")

# Show the plot
plt.show()
```
![](/Netflix_Data/images/2d9a3727-9580-4559-95cf-22a1f7bf1812.png)

Ici chaque points, représente un film unique. Nous pouvons donc observer plus en détail et de manière plus précise, l'évolution des films. Il y a eu une forte augmentation du nombre de films à partir des années 2000.

## Filtrage des données en fonction de leur durée 
```python
# Filter for durations shorter than 60 minutes
short_movies = netflix_movies_col_subset[netflix_movies_col_subset["duration"] < 60]

# Print the first 20 rows of short_movies
print(short_movies[0:20])
```
![](/Netflix_Data/images/print_short_movies.png)

Grâce au filtrage des films d'une durée de moins de 60 minutes, on peut s'apercevoir qu'une majorité de ces films se compose de films pour enfant, des documentaires et des stand-up

## Attribution d'une couleur en fonction de la catégorie du film
```python
# Define an empty list
colors = []

# Iterate over rows of netflix_movies_col_subset
for lab, row in netflix_movies_col_subset.iterrows() :
    if row["genre"] == "Children" :
        colors.append("red")
    elif  row["genre"] == "Documentaries" :
        colors.append("blue")
    elif row["genre"] == "Stand-Up" :
        colors.append('green')
    else:
        colors.append("black")
        
# Inspect the first 10 values in your list        
colors[0:10]
```
![](/Netflix_Data/images/colors.png)

Chaque film se voit attribuer une couleur en fonction de sa catégorie :
- Rouge : les films pour enfants
- Bleu : les documentaires
- Vers : Les stand-up
- Noire : Le reste des films

## Ajout de label aux différents axes ainsi que des couleurs
```python
# Set the figure style and initalize a new figure
plt.style.use('fivethirtyeight')
fig = plt.figure(figsize=(12,8))

# Create a scatter plot of duration versus release_year
plt.scatter(netflix_movies_col_subset['release_year'],netflix_movies_col_subset['duration'], c=colors)

# Create a title and axis labels
plt.title('Movie duration by year of release')
plt.xlabel('Release year')
plt.ylabel("Duration(min)")

# Show the plot
plt.show
```
![](/Netflix_Data/images/a7e1cf64-559a-4337-922c-09890df9df25.png)

Chaque film possèdant maintenant une couleur en fonction de la catégorie à laquelle il appartient, on peut constater que la grand majorité des films ayant une courte durée sont les films pour enfants, les documentaires ainsi que les stand-up
## Conclusion

Suite à l'exploration, au traitement ainsi que de l'analyse de ces données, nous pouvons conclure, qu'effectivement la durée moyenne des films a baissé au fur et à mesure des années. Cette tendance est du à l'augmentation de la production de films pour enfant ou encore de documentaires et de stand-up, qui sont de durée plus courte qu'un film classique.
Nous avons donc pu confirmer cette tendance ainsi que sa cause.
