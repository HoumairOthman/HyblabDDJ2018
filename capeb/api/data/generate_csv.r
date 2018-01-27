data = read.csv('CAPEBPaysDelaLoire_2014-2017.csv', header=TRUE, sep=";", encoding ="UTF-8")
attach(data)


getAttYear <- function(y, l_atr){
  l_atr = c(l_atr, "X..Date")
  return(subset(data, X..Date == y, select = l_atr))
}

data$X..Date = as.numeric(substring(data$X..Date, 7, 10))
annee = unique(data$X..Date)
annee
table(data$D�veloppement.durable)

DD = table(subset(data, data$X..Date == 2016,select = c("intercommunalite.2017_EPCI", "D�veloppement.durable")))
colnames(DD)[1] = "Pas de r�ponse"
DD
write.csv(file="D�veloppement_durable2016.csv",x=DD)
data$Inter
data$March�s.publics

MP = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","March�s.publics")))
colnames(MP)[1] = "Pas de r�ponse"
MP
write.csv(file="March�s_publics2017.csv",x=MP)

data$Zone.intervention
ZI = aggregate( Zone.intervention ~ intercommunalite.2017_EPCI, getAttYear(2017, c("intercommunalite.2017_EPCI", "Zone.intervention")), mean)
ZI
write.csv(file="Zone_intervention2017.csv",x=MP)

AC = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","Activit�")))
write.csv(file="Activit�_2017.csv",x=MP)

