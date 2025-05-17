/**
 * @Author: longmo
 * @Date: 2025-05-14 14:02:03
 * @LastEditTime: 2025-05-17 15:39:19
 * @FilePath: src/components/BigTreeDemo/mockTreeData.js
 * @Description:
 */
export function mockTreeData(maxLength = 1_0000) {
    const data = [],
        root = 8,
        children = 3,
        base = maxLength;
    for (let i = 0; i < root; i++) {
        data.push({
            id: `${i}`,
            name: `test-${i}`,
            children: [],
        });
        for (let j = 0; j < children; j++) {
            data[i].children.push({
                id: `${i}-${j}`,
                name: `test-${i}-${j}`,
                children: [],
            });
            for (let k = 0; k < base; k++) {
                data[i].children[j].children.push({
                    id: `${i}-${j}-${k}`,
                    name: `test-${i}-${j}-${k}`,
                });
            }
        }
    }
    return data;
}
