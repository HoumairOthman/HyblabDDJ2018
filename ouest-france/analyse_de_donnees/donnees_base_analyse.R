setwd("C:/Users/BOUILLETEAU/Documents/Hyblab/HyblabDDJ2018/ouest-france/public/")

#ouverture du fichier de donnees
data.hellfest <- read.csv("data/DataHellfest.csv",sep=";",header=T)
#modification des noms
colnames(data.hellfest) <- c("Nom","Pays","Date_debut","Date_fin","Ville","Nombre","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017")

artists.hellfest <- data.hellfest[,1:6]

transform <- function(data)
{
  date <- NULL
  scene <- NULL
  groupe <- NULL
  Nbligne <- nrow(data)
  Nbcol <- ncol(data)
  n <- 1 #nombre de lignes dans le data.frame final
  for(c in 7:Nbcol)
  {
    for(l in 1:Nbligne)
    {
      if(data[l,c]!=0)
      {
        date[n] <- names(data.hellfest)[c]
        scene[n] <- as.character(data[l,c])
        groupe[n] <- as.character(data.hellfest[l,1])
        n <- n+1
      }
    }
  }
  R <- data.frame(date,scene,groupe)
  return(R)
}

artists.stages.hellfest <- transform(data.hellfest)

table(artists.stages.hellfest$scene)


plot(table(artists.stages.hellfest$date))
sort(artists.hellfest$Nombre)

#ecriture des fichiers
write.table(artists.hellfest,"data/artistsHellfest.csv",sep=";",row.names = FALSE)
write.table(artists.stages.hellfest,"data/artistsStagesHellfest.csv",sep=";",row.names = FALSE)

#SQL
# Load the package
library(sqldf)
library("PASWR")

# Use the titanic data set

data(artists.helfest)
colnames(artists.helfest)
head(artists.helfest)

sqldf('select * from artists.helfest')
