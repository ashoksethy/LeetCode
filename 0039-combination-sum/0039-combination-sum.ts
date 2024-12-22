function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, currentCombination: number[], remainingTarget: number): void {
        if (remainingTarget === 0) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remainingTarget) {
                currentCombination.push(candidates[i]);
                backtrack(i, currentCombination, remainingTarget - candidates[i]); // Stay at 'i' to allow unlimited usage
                currentCombination.pop(); // Backtrack
            }
        }
    }
    
    backtrack(0, [], target);
    return result;
}

// Example test case
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
