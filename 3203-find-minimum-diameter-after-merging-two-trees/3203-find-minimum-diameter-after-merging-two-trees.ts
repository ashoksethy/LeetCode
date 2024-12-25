function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
    const findDiameter = (edges: number[][]): { diameter: number, farthestNodes: number[] } => {
        const n = edges.length + 1; // Number of nodes
        const adjList: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }

        const bfs = (start: number): [number, number] => {
            const dist = Array(n).fill(-1);
            const queue = [start];
            dist[start] = 0;
            let farthestNode = start;

            while (queue.length) {
                const node = queue.shift()!;
                for (const neighbor of adjList[node]) {
                    if (dist[neighbor] === -1) {
                        dist[neighbor] = dist[node] + 1;
                        queue.push(neighbor);
                        if (dist[neighbor] > dist[farthestNode]) {
                            farthestNode = neighbor;
                        }
                    }
                }
            }

            return [farthestNode, dist[farthestNode]];
        };

        const [farthestFromStart, _] = bfs(0);
        const [farthestFromEnd, diameter] = bfs(farthestFromStart);

        return { diameter, farthestNodes: [farthestFromStart, farthestFromEnd] };
    };

    const tree1 = findDiameter(edges1);
    const tree2 = findDiameter(edges2);

    // Calculate the minimum diameter after connecting the two trees
    const newDiameter = Math.max(
        Math.ceil(tree1.diameter / 2) + Math.ceil(tree2.diameter / 2) + 1,
        tree1.diameter,
        tree2.diameter
    );

    return newDiameter;
}

// Example Usage
const edges1 = [[0, 1], [1, 2], [1, 3]];
const edges2 = [[0, 1], [1, 2]];
console.log(minimumDiameterAfterMerge(edges1, edges2)); // Output depends on the input trees
