#include <stdio.h>
int main()
{
    char *s = "Hello";
    char p[] = "Hello";
    s[0] = 'M';
    p[0] = 'N';
    printf("%s,%s", s, p);
}