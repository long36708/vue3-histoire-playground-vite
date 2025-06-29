

## 默认让所有 date-title 都具备 sticky 能力 是必须的吗，为什么
默认让所有 date-title 都具备 sticky 能力并不是必须的，这其实是我们在修复功能问题时采用的一种 折中方案。

## **为什么原修复方案让所有标题默认 `sticky`？**

### 1\. **问题的本质**

-   **`IntersectionObserver` 的局限性**：  
    当第一个日期区块完全位于视口顶部时，它可能无法触发 `IntersectionObserver` 的回调（因为 `rootMargin` 和 `threshold` 的计算方式），导致 `activeDate` 无法更新，第一个标题失去 `sticky` 效果。


### 2\. **折中方案的思路**

-   **让所有标题默认 `sticky`**：  
    这样即使 `IntersectionObserver` 未能正确检测，标题仍然会固定在顶部（只是没有高亮样式）。

-   **用 `opacity` 区分活跃状态**：  
    只有当前活跃的标题完全可见，非活跃标题半透明，避免视觉混乱。


### 3\. **缺点**

-   **牺牲了部分性能优化**：  
    浏览器仍需为所有 `sticky` 标题计算布局，尽管比纯 CSS 方案稍好（因为减少了 `z-index` 层级计算）。

-   **逻辑不够严谨**：  
    依赖 `opacity` 区分状态，而非完全由 `IntersectionObserver` 控制。


___

## **更优的解决方案（不依赖默认 `sticky`）**

我们可以通过 **调整 `IntersectionObserver` 参数 + 边缘情况处理** 来彻底解决问题，而不需要让所有标题默认 `sticky`。
