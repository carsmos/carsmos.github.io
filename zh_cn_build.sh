#!/bin/bash

src_dir='../carsmos.github.io'
dest_dir='../carsmos.github.io_zh_cn'
file="../carsmos.github.io_zh_cn/_config.yml"


if [ ! -d "$dest_dir" ]
then
  # 如果目标文件夹不存在，则创建
  mkdir "$dest_dir"
fi

# 复制文件夹
cp -R "$src_dir"/* "$dest_dir"


# 删除文件
rm -rf "$dest_dir/_data"
rm -rf "$dest_dir/_posts"

# 重命名文件
mv "$dest_dir/_data_zh_cn" "$dest_dir/_data"
mv "$dest_dir/_posts_zh_cn" "$dest_dir/_posts"

# 修改_config.yml
sed -i 's/https:\/\/carsmos\.ai/https:\/\/www.carsmos.cn/' "$file"
# jekyll build
cd "$dest_dir"
jekyll build
# upload oss
ossutil cp -r -f _site/ oss://www-carsmos-cn/

