def unroll(M, y):
    if y > 0:
        for i in M[0][0:y]: print(i)
        for i in [e[-1] for e in M[0:y]]: print(i)
        for i in reversed(M[y][1:y+1]): print(i)
        for i in reversed([e[0] for e in M[1:y+1]]): print(i)
        unroll([e[1:y] for e in M[1:y]], len(M)-3)
    else:
        for i in M: 
            for j in i: print(j)

def unrollM(M):
    unroll(M, len(M)-1)

#unrollM([l.split() for l in open("Matrix.txt").readlines()])

A= [
    [1, 2, 3],
    [4, 5, 6]
]

print(A.index(2))