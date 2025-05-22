/**
 * @Author: longmo
 * @Date: 2025-05-14 14:02:03
 * @LastEditTime: 2025-05-22 19:32:48
 * @FilePath: src/utils/mockTreeData.js
 * @Description:
 */
export function mockTreeData(maxLength = 200_0000) {
    const data = [],
        root = 1,
        children = maxLength,
        base = 0;
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

const getKey = (prefix, id) => {
    return `${prefix}-${id}`
}
/**
 * maxDeep 最大深度
 * maxChildren 最大子节点数
 * minNodesNumber 最小节点数
 * deep 当前深度
 * key 节点key
 * const props = {
 *     value: 'id',
 *     label: 'label',
 *     children: 'children',
 * }
 */
const createData = (
    maxDeep,
    maxChildren,
    minNodesNumber,
    deep = 1,
    key = 'node'
) => {
    let id = 0
    return Array.from({length: minNodesNumber})
        .fill(deep)
        .map(() => {
            const childrenNumber =
                deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
            const nodeKey = getKey(key, ++id)
            // keys.value.push(nodeKey)
            return {
                id: nodeKey,
                label: nodeKey,
                children: childrenNumber
                    ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
                    : undefined,
            }
        })
}
