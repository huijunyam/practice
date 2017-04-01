def island_perimeter(grid)
    island = 0
    neighbour = 0
    grid.each_with_index do |row, i|
       row.each_with_index do |el, j|
            if el == 1
                island += 1
                if i != grid.length - 1 && grid[i + 1][j] == 1
                    neighbour += 1
                end
                if j != grid[i].length - 1 && grid[i][j + 1] == 1
                    neighbour += 1
                end
            end
       end
    end
    (4 * island) - (2 * neighbour)
end
