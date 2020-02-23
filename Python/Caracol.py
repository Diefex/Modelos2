def unroll(M):
    if (len(M)>1):
        return M.pop(0) + unroll([[e[x] for e in M] for x in reversed(range(len(M[0])))])
    else:
        return M[0]

print(unroll([l.split() for l in open("Matrix.txt").readlines()]))