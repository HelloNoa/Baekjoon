n=int(input())
b=int(input())

print(n*(b%10))
print(n*(b%100//10))
print(n*(b//100))
print(n*b)
