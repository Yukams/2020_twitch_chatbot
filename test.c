
#include <stdio.h>

int main(void){

int valeur=-1, somme=0;

while(valeur!=0)
    {
    scanf("%d", &valeur);
    if(valeur > 0)
        {
        somme = somme + valeur;
        }
    }

printf("%d", somme);

return 0;
}
